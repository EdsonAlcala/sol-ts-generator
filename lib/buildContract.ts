import { Member, FunctionMemberInput, FunctionMember, Abi, Definition } from "./types";

import { SolidityType } from "./solidityTypes";
import { getMappings } from "./solidityTypes";

const mappings = getMappings();

export const buildContract = (definition: Definition): string => {
  return `
        export interface ${definition.contractName}Instance extends ContractInstance {
          ${buildMembers(definition.abi)}
        }
      `;
};

export const buildMembers = (abi: Abi): string => {
  return abi.map(buildMember).join("\n");
};

export const buildMember = (member: Member): string => {
  switch (member.type) {
    case "function":
      return buildFunctionMember(member);
    case "event":
      return buildEventMember(member);
    case "constructor":
      return buildConstructorMember(member);
    case "fallback":
      return buildFallbackMember(member);
    default:
      throw "Exhaustiveness miss!";
  }
};

export const buildFunctionMember = (member: FunctionMember): string => {
  let args = member.inputs.map(buildFunctionArgument).join(", ");

  if (args.length > 0) {
    args += ", ";
  }

  return `${member.name}(${args}options?: TransactionOptions): ${translateOutputs(
    member.outputs,
  )};`;
};

export const translateOutputs = (outputs: FunctionMemberInput[]): string => {
  let valueType;
  if (outputs.length === 1) {
    valueType = translateOutput(outputs[0]);
  } else if (outputs.length === 0) {
    valueType = "void";
  } else {
    valueType = `[${outputs.map(translateOutput).join(", ")}]`;
  }

  return `Promise<${valueType}>`;
};

export const translateOutput = (output: FunctionMemberInput): string => {
  return translateType(output.type, { UInt: "BigNumber.BigNumber" });
};

let unnamedArgumentNumber = 0;

export const unnamedArgumentName = (): string => {
  return `unnamed${unnamedArgumentNumber++}`;
};

export const buildFunctionArgument = (input: FunctionMemberInput): string => {
  let name = input.name;
  if (name[0] == "_") {
    name = name.slice(1);
  }
  const type = translateType(input.type);

  if (name.length === 0) {
    name = unnamedArgumentName();
  }

  return `${name}: ${type}`;
};

export const translateType = (type: SolidityType, options = { UInt: "UInt" }): string => {
  const result = mappings.get(type);
  if (!result) {
    throw `Unexpected case! ${type}`;
  }
  if (type == "uint256[]") {
    return `${options.UInt}[]`;
  }
  return result;
};

export const buildEventMember = (_member: Member): string => {
  return "";
};

export const buildConstructorMember = (_member: Member): string => {
  return "";
};

export const buildFallbackMember = (_member: Member): string => {
  return "";
};
