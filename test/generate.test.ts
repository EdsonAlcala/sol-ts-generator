import generate from "../lib/generate";
import { Options } from "../lib/parseArgs";

describe("generate component", () => {
  it("should return type definition generated", async () => {
    const options: Options = {
      glob: "",
      outDir: "",
    };

    const result = await generate(options);

    expect(result).toBeTruthy();
  });
});
