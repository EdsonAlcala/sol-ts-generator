"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateHeader = function () {
    return "\n        import Web3 = require(\"web3\");\n        import { BigNumber } from \"bignumber.js\";\n    \n        \n        type Address = string;\n        type TransactionOptions = Partial<Transaction>;\n        type UInt = number | BigNumber;\n\n        interface Transaction {\n            hash: string;\n            nonce: number;\n            blockHash: string | null;\n            blockNumber: number | null;\n            transactionIndex: number | null;\n            from: Address | ContractInstance;\n            to: string | null;\n            value: UInt;\n            gasPrice: UInt;\n            gas: number;\n            input: string;\n        }\n\n        interface ContractInstance {\n            address: string;\n            sendTransaction(options?: TransactionOptions): Promise<void>;\n        }";
};
exports.default = generateHeader;
