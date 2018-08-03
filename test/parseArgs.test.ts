import { parseArgs, Options } from "../src/parseArgs";

describe("parseArgs test", () => {
  it("should parse arguments correctly", () => {
    const globPattern = "./build/contracts/*.json";
    const outDir = "./types";
    const expectedResult: Options = {
      glob: globPattern,
      outDir: outDir
    };
    process.argv.push("--glob", globPattern);
    process.argv.push("--outDir", outDir);

    const options = parseArgs();

    expect(options).toEqual(expectedResult);
  });
});
