import { createStructTables } from "@stexcore/indexed-db";
import keyPairStructure from "./structures/key-pair.structure";

export default createStructTables({
    ...keyPairStructure
});