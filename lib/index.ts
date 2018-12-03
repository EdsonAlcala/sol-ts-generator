#!/usr/bin/env node

import { parseArgs } from "./parseArgs";
import generate from "./generate";
import * as prettier from "prettier";
import { writeFileSync } from "fs";
import path from "path";
import fs from "fs";

const main = async (): Promise<void> => {
  try {
    const options = parseArgs();
    const generatedTypes = await generate(options);
    const prettierTypes = prettier.format(generatedTypes, { parser: "typescript" });
    if (!fs.existsSync(options.outDir)) {
      fs.mkdirSync(options.outDir);
    }
    if (!fs.existsSync(path.join(options.outDir, "contracts"))) {
      fs.mkdirSync(path.join(options.outDir, "contracts"));
    }
    writeFileSync(path.join(options.outDir, "contracts/index.d.ts"), prettierTypes);
  } catch (error) {
    console.log(error);
  }
};

main()
  .then(() => {
    console.log("Finished");
  })
  .catch((e: Error) => {
    console.log(`There was an error: ${e.message}`);
    throw new Error(`There was an error: ${e.message}`);
  });
