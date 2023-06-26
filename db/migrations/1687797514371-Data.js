module.exports = class Data1687797514371 {
    name = 'Data1687797514371'

    async up(db) {
        await db.query(`CREATE TABLE "token" ("id" character varying NOT NULL, "contract_address" text, "token_id" text, "owner" text, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "contract_address" text, "token_id" text, "from" text, "to" text, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block" integer NOT NULL, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "token"`)
        await db.query(`DROP TABLE "transfer"`)
    }
}
