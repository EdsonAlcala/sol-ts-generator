#!/usr/bin/env node

import { parseArgs } from "./parseArgs";
import generate from "./generate";

const main = async (): Promise<void> => {
  const options = parseArgs();
  await generate(options);
  // const generatedTypes = await generate(options);
  //   const prettierTypes = prettier(generatedTypes)
  //   await writeToDisk(prettierTypes);
};

main()
  .then(() => {
    console.log("Finished");
  })
  .catch((e: Error) => {
    console.log(`There was an error: ${e.message}`);
    throw new Error(`There was an error: ${e.message}`);
  });
