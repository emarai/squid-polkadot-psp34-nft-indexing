import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Token {
    constructor(props?: Partial<Token>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    contractAddress!: string | undefined | null

    @Column_("text", {nullable: true})
    tokenId!: string | undefined | null

    @Column_("text", {nullable: true})
    owner!: string | undefined | null
}
