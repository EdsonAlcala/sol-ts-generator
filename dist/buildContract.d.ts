import { Member, FunctionMemberInput, FunctionMember, Definition } from "./types";
import { SolidityType } from "./solidityTypes";
export declare const buildContract: (definition: Definition) => string;
export declare const buildMembers: (abi: Member[]) => string;
export declare const buildMember: (member: Member) => string;
export declare const buildFunctionMember: (member: FunctionMember) => string;
export declare const translateOutputs: (outputs: FunctionMemberInput[]) => string;
export declare const translateOutput: (output: FunctionMemberInput) => string;
export declare const unnamedArgumentName: () => string;
export declare const buildFunctionArgument: (input: FunctionMemberInput) => string;
export declare const translateType: (type: SolidityType, isOutput?: boolean) => string;
export declare const buildEventMember: (_member: Member) => string;
export declare const buildConstructorMember: (_member: Member) => string;
export declare const buildFallbackMember: (_member: Member) => string;
