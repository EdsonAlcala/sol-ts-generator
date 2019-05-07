import { main } from "../lib";

const DEFAULT_GLOB_PATTERN = "./build/contracts/*.json";
const DEFAULT_OUTDIR = "./types";

describe("Index test", () => {
    it("should generate types", async () => {

        const result = await main({
            glob: DEFAULT_GLOB_PATTERN,
            outDir: DEFAULT_OUTDIR,
        });

        console.log("Result", result);
    })

})