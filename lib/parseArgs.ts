import commandLineArgs from "command-line-args";

const DEFAULT_GLOB_PATTERN = "./build/contracts/*.json";
const DEFAULT_OUTDIR = "./types";

export interface Options {
  glob: string;
  outDir: string;
}

export const parseArgs = (): Options => {
  const optionDefinitions = [{ name: "glob", type: String }, { name: "outDir", type: String }];

  const rawOptions = commandLineArgs(optionDefinitions);

  return {
    glob: rawOptions.glob || DEFAULT_GLOB_PATTERN,
    outDir: rawOptions.outDir || DEFAULT_OUTDIR,
  };
};
