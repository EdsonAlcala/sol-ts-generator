import generateHeader from "../src/generateHeader";

describe("Generate component", () => {
  it("should return header correctly", () => {
    const expectedResult = `
        import * as Web3 from "web3";
        import * as BigNumber from "bignumber.js";

        type Address = string;
        type TransactionOptions = Partial<Transaction>;
        type UInt = number | BigNumber.BigNumber;

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
        }
    `;

    const result = generateHeader();

    expect(result).toBe(expectedResult);
  });
});
