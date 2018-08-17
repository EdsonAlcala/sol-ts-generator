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
export interface CrowdsaleInstance extends ContractInstance {
  owner(options?: TransactionOptions): Promise<Address>;
  transferOwnership(
    newOwner: Address,
    options?: TransactionOptions
  ): Promise<void>;
  initialAmount(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
}

export interface MigrationsInstance extends ContractInstance {
  last_completed_migration(
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  owner(options?: TransactionOptions): Promise<Address>;

  setCompleted(completed: UInt, options?: TransactionOptions): Promise<void>;
  upgrade(new_address: Address, options?: TransactionOptions): Promise<void>;
}

export interface OwnableInstance extends ContractInstance {
  owner(options?: TransactionOptions): Promise<Address>;

  transferOwnership(
    newOwner: Address,
    options?: TransactionOptions
  ): Promise<void>;
}
