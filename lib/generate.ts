import path from "path";

import { buildContract } from "./buildContract";
import { Definition } from "./types";
import { Options } from "./parseArgs";

import globPromise from "./utils/globPromise";
import generateHeader from "./generateHeader";

const generate = async (options: Options): Promise<string> => {
  const files = await globPromise(options.glob);
  let result: string = generateHeader();
  files.forEach(file => {
    const filePath = path.join(process.cwd(), file);

    let definition: Definition = require(filePath);

    result += buildContract(definition);
  });
  return result;
};

export default generate;
