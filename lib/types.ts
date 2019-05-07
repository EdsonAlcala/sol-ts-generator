import { SolidityType } from "./solidityTypes";

export interface ConstructorMember {
  type: "constructor";
  inputs: FunctionMemberInput[];
  // payable: false; // To be deprecated
}

export interface FunctionMember {
  type: "function";
  name: string;
  inputs: FunctionMemberInput[];
  outputs: FunctionMemberOutput[];
  stateMutability: StateMutability
  // payable: boolean; // To be deprecated
  // constant: boolean;
}

export interface FallbackMember {
  type: "fallback";
  // payable: boolean; // To be deprecated
}

export interface EventMember {
  type: "event";
  name: string;
  inputs: EventMemberInput[];
  anonymous: boolean;
}

export interface FunctionMemberInput {
  name: string;
  type: SolidityType;
  components: TupleType[];
}

export interface FunctionMemberOutput {
  name: string;
  type: SolidityType;
  components: TupleType[];
}

export interface EventMemberInput {
  name: string;
  type: SolidityType;
  components: TupleType[];
  indexed: boolean;
}

export interface TupleType {
  name: string;
  type: SolidityType;
  components: TupleType[];
}

export enum StateMutability {
  pure = "pure",
  view = "view",
  nonpayable = "nonpayable"
}

export type Member = ConstructorMember | EventMember | FunctionMember | FallbackMember;

export type Abi = (Member)[];

export interface Definition {
  contractName: string;
  abi: Abi;
}
