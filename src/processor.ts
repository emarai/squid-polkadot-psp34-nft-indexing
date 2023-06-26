import { lookupArchive } from "@subsquid/archive-registry";
import * as ss58 from "@subsquid/ss58";
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from "@subsquid/substrate-processor";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import { In } from "typeorm";
import * as psp34_inkv4 from "./abi/psp34_inkv4";
import { Token, Transfer } from "./model";

const CONTRACT_ADDRESS_SS58 = "XnrLUQucQvzp5kaaWLG9Q3LbZw5DPwpGn69B5YcywSWVr5w";
const SS58_PREFIX = ss58.decode(CONTRACT_ADDRESS_SS58).prefix;

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive("astar", {
      release: "FireSquid",
      type: "Substrate",
    }),
  })
  .addEvent("Contracts.ContractEmitted");

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchContext<Store, Item>;

processor.run(new TypeormDatabase(), async (ctx) => {
  const txs = extractTransferRecords(ctx);

  const tokenIdsFormatted = new Set<string>();
  txs.forEach((tx) => {
    tokenIdsFormatted.add(`${tx.contractAddress}:${tx.tokenId}`);
  });

  const tokensMap = await ctx.store
    .findBy(Token, {
      id: In([...tokenIdsFormatted]),
    })
    .then((tokens) => {
      return new Map(tokens.map((token) => [token.id, token]));
    });

  const transfers = txs.map((tx) => {
    const transfer = new Transfer({
      id: tx.id,
      contractAddress: tx.contractAddress,
      tokenId: tx.tokenId,
      from: tx.from || null,
      to: tx.to || null,
      block: tx.block,
      timestamp: tx.timestamp,
    });

    tokensMap.set(
      `${tx.contractAddress}:${tx.tokenId}`,
      new Token({
        id: `${tx.contractAddress}:${tx.tokenId}`,
        contractAddress: tx.contractAddress,
        tokenId: tx.tokenId,
        owner: tx.to,
      })
    );

    return transfer;
  });

  await ctx.store.save([...tokensMap.values()]);
  await ctx.store.insert(transfers);
});

interface TransferRecord {
  id: string;
  contractAddress: string;
  tokenId: string;
  from?: string;
  to?: string;
  block: number;
  timestamp: Date;
}

function extractTransferRecords(ctx: Ctx): TransferRecord[] {
  const records: TransferRecord[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === "Contracts.ContractEmitted") {
        let event;
        try {
          event = psp34_inkv4.decodeEvent(item.event.args.data);
        } catch {
          continue;
        }
        if (event.__kind === "Transfer") {
          console.log(item);
          console.log(event);
          records.push({
            id: item.event.id,
            contractAddress: ss58
              .codec(SS58_PREFIX)
              .encode(
                Buffer.from(item.event.args.contract.replace("0x", ""), "hex")
              ),
            tokenId: event.id.value.toString(),
            from: event.from && ss58.codec(SS58_PREFIX).encode(event.from),
            to: event.to && ss58.codec(SS58_PREFIX).encode(event.to),
            block: block.header.height,
            timestamp: new Date(block.header.timestamp),
          });
        }
      }
    }
  }
  return records;
}
