import { createStructTables } from "@stexcore/indexed-db";

export default createStructTables({
    "key-pair": {
        "id": {
            type: "number",
            primarykey: true,
            autoincrement: true
        },
        "publicKey": {
            type: "string",
            allow_null: false
        },
        "privateKey": {
            type: "string",
            allow_null: false
        },
        "serverPublicKey": {
            type: "string",
            allow_null: false
        }
    }
})