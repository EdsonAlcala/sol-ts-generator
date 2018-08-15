import { SolidityType } from "./solidityTypes";

export interface ConstructorMember {
  inputs: FunctionMemberInput[];
  payable: false;
  type: "constructor";
}

export interface EventMember {
  inputs: FunctionMemberInput[];
  name: string;
  type: "event";
}

export interface FunctionMember {
  inputs: FunctionMemberInput[];
  outputs: FunctionMemberInput[];
  name: string;
  constant: boolean;
  payable: boolean;
  type: "function";
}

export interface FallbackMember {
  type: "fallback";
  payable: boolean;
}

export interface FunctionMemberInput {
  name: string;
  type: SolidityType;
}

export type Member = ConstructorMember | EventMember | FunctionMember | FallbackMember;

export type Abi = (Member)[];

export interface Definition {
  contractName: string;
  abi: Abi;
}
