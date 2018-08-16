# Generate Typescript type definitions from Solidity

Generate typescript type definitions from Ethereum smart contracts ABI that will allow you to write static typed Typescript tests in your Truffle projects

# Background

Inspired by the amazing work of [Bloom](https://blog.hellobloom.io/how-typescript-makes-smart-contracts-easier-to-test-and-more-robust-c612a2d99537) and [TypeChain](https://github.com/Neufund/TypeChain)

I decided to turn those ideas into a simple package

# Install

> npm install sol-ts-generator

# Options

```
Usage: sol-ts-generator [options]

Options:
   --outDir, output directory to write the type definitions; default is "./types" [string]
   --glob, pattern to get existing abi code; default is "./build/contracts/*.json" [string]
```

# Commands

> npm test

> npm run build