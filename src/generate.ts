import glob from "glob";
import path from "path";

import { buildContract } from "./buildContract";
import { Definition } from "./types";
import { IOptions } from "./parseArgs";

const generate = async (options: IOptions): Promise<void> => {
  const files = await globPromise(options.glob);
  files.forEach(file => {
    const filePath = path.join("..", file); // TO change, not sure how, but it has to refer to the path passed

    let definition: Definition = require(filePath);

    console.log(buildContract(definition));
    buildContract(definition);
    // prettier
    // write to disk
  });
};

const globPromise = (pattern: string, options = {}): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (err: Error | null, files: string[]) => {
      if (err) {
        console.log("Error!", err);
        reject(err);
      }
      resolve(files);
    });
  });
};

export default generate;
