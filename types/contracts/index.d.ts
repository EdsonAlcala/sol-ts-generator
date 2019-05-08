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
}
export interface KomgoOnboarderInstance extends ContractInstance {
  companiesNodes(
    unnamed0: number,
    options?: TransactionOptions
  ): Promise<string>;
  owner(options?: TransactionOptions): Promise<Address>;
  transferOwnership(
    newOwner: Address,
    options?: TransactionOptions
  ): Promise<void>;

  addCompanyOnboardingInformation(
    onboardInformation: {
      node: string;
      ethPubKeys: { publicKey: { x: string; y: string }; termDate: number };
      textEntries: [{ key: string; value: string }];
      booleanEntries: [{ key: string; value: boolean }];
    },
    options?: TransactionOptions
  ): Promise<boolean>;
  addCompaniesOnboardingInformation(
    onboardInformation: [
      {
        node: string;
        ethPubKeys: { publicKey: { x: string; y: string }; termDate: number };
        textEntries: [{ key: string; value: string }];
        booleanEntries: [{ key: string; value: boolean }];
      }
    ],
    options?: TransactionOptions
  ): Promise<boolean>;
}
