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
export declare type SolidityType = "address" | "address[]" | "bool" | "bytes" | "bytes4" | "bytes32" | "string" | "uint8" | "uint64" | "uint256" | "uint256[]";
export interface FunctionMemberInput {
    name: string;
    type: SolidityType;
}
export declare type Member = ConstructorMember | EventMember | FunctionMember | FallbackMember;
export declare type Abi = (Member)[];
export interface Definition {
    contractName: string;
    abi: Abi;
}
