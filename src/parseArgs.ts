import commandLineArgs from "command-line-args";

const DEFAULT_GLOB_PATTERN = "../build/contracts/*.json";

export interface IOptions {
  glob: string;
  outDir: string;
}

const args = process.argv;
console.log("Arguments", args);
console.log("Dirname", __dirname);

export const parseArgs = (): IOptions => {
  const optionDefinitions = [
    { name: "glob", type: String, defaultOption: true },
    { name: "outDir", type: String }
  ];

  const rawOptions = commandLineArgs(optionDefinitions);

  console.log(rawOptions);

  return {
    glob: rawOptions.glob || DEFAULT_GLOB_PATTERN,
    outDir: rawOptions.outDir
  };
};
