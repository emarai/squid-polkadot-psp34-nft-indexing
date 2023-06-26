import {
  Entity as Entity_,
  Column as Column_,
  PrimaryColumn as PrimaryColumn_,
} from "typeorm";

@Entity_()
export class Transfer {
  constructor(props?: Partial<Transfer>) {
    Object.assign(this, props);
  }

  @PrimaryColumn_()
  id!: string;

  @Column_("text", { nullable: true })
  contractAddress!: string | undefined | null;

  @Column_("text", { nullable: true })
  tokenId!: string | undefined | null;

  @Column_("text", { nullable: true })
  from!: string | undefined | null;

  @Column_("text", { nullable: true })
  to!: string | undefined | null;

  @Column_("timestamp with time zone", { nullable: false })
  timestamp!: Date;

  @Column_("int4", { nullable: false })
  block!: number;
}
