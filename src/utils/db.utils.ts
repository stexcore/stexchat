import { IndexedDB } from "@stexcore/indexed-db";
import structures from "../db/structures";

/**
 * Db Utils
 */
export default new class DBUtils extends IndexedDB<typeof structures> {

    /**
     * Initialize DB
     */
    constructor() {
        super("stexchat", structures);
    }
    
}