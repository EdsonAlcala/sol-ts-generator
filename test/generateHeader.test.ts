import generateHeader from "../lib/generateHeader";

describe("Generate component", () => {
    it("should return header correctly", () => {
        const expectedResult = `
        import Web3 = require("web3");
        import { BigNumber } from "bignumber.js";
        
        type Address = string;
        type TransactionOptions = Partial<Transaction>;
        type UInt = number | BigNumber;

        interface Transaction {
            hash: string;
            nonce: number;
            blockHash: string | null;
            blockNumber: number | null;
            transactionIndex: number | null;
            from: Address | ContractInstance;
            to: string | null;
            value: UInt;
            gasPrice: UInt;
            gas: number;
            input: string;
        }

        interface ContractInstance {
            address: string;
            sendTransaction(options?: TransactionOptions): Promise<void>;
        }`;

        const result = generateHeader();

        expect(result.replace(/\s/g, "")).toEqual(expectedResult.replace(/\s/g, ""));
    });
});
