import { Member, FunctionMemberInput, FunctionMember, Abi, Definition, TupleType } from "./types";

import { SolidityType } from "./solidityTypes";
import { getMappings, getOutputMappings } from "./solidityTypes";

const mappings = getMappings();
const outputMappings = getOutputMappings();

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
  return translateType(output.type, true);
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
  let type = input.components ? generateTupleType(input, buildFunctionArgument) : translateType(input.type);

  if (name.length === 0) {
    name = unnamedArgumentName();
  }
  return `${name}: ${type}`;
};

export const translateType = (type: SolidityType, isOutput: boolean = false): string => {
  const result = isOutput ? outputMappings.get(type) : mappings.get(type);
  if (!result) {
    const regex = new RegExp(/address\[(2[0-5][0-6]|1[0-9][0-9]|[1-9]?[0-9])]/i);
    if (regex.test(type.toString())) {
      const result = isOutput
        ? `Address[]`
        : (() => {
          const number = Number(type.match(/\d/g)!.join(""));
          return `Address[${number}]`;
        })();
      return result;
    }

    throw `Unexpected case! ${type}`;
  }
  return result;
};

export const generateTupleType = (tuple: TupleType, generator: (evmType: FunctionMemberInput) => string) => {
  return (
    "{" +
    tuple.components
      .map(component => `${generator(component)}`)
      .join(", ") +
    "}"
  );
}

export const buildEventMember = (_member: Member): string => {
  return "";
};

export const buildConstructorMember = (_member: Member): string => {
  return "";
};

export const buildFallbackMember = (_member: Member): string => {
  return "";
};
