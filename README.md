# NFT Indexing using subsquid for Astar

## Deployed API

```
https://squid.subsquid.io/polkadot-psp34-nft-indexing/v/v1/graphql
```

Dependencies: Node.js, Docker.

## Quickstart

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Retrieve the template
sqd init my_squid_name -t frontier-evm
cd my_squid_name

# 2. Install dependencies
npm ci

# 3. Start a Postgres database container and detach
sqd up

# 4. Start the processor
sqd process

# 5. The command above will block the terminal
#    being busy with fetching the chain data,
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```
