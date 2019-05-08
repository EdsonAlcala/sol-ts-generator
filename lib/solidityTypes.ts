type Lit = string | number | boolean | undefined | null | void | {};

const tuple = <T extends Lit>(...args: T[]) => args;

const bytesTypes = tuple(
  "bytes",
  "bytes1",
  "bytes2",
  "bytes3",
  "bytes4",
  "bytes5",
  "bytes6",
  "bytes7",
  "bytes8",
  "bytes9",
  "bytes10",
  "bytes11",
  "bytes12",
  "bytes13",
  "bytes14",
  "bytes15",
  "bytes16",
  "bytes17",
  "bytes18",
  "bytes19",
  "bytes20",
  "bytes21",
  "bytes22",
  "bytes23",
  "bytes24",
  "bytes25",
  "bytes26",
  "bytes27",
  "bytes28",
  "bytes29",
  "bytes30",
  "bytes31",
  "bytes32",
);

type SolidityBytesType = typeof bytesTypes[number];

const uintTypes = tuple(
  "uint8",
  "uint16",
  "uint24",
  "uint32",
  "uint40",
  "uint48",
  "uint56",
  "uint64",
  "uint72",
  "uint80",
  "uint88",
  "uint96",
  "uint104",
  "uint112",
  "uint120",
  "uint128",
  "uint136",
  "uint144",
  "uint152",
  "uint160",
  "uint168",
  "uint176",
  "uint184",
  "uint192",
  "uint200",
  "uint208",
  "uint216",
  "uint224",
  "uint232",
  "uint240",
  "uint248",
  "uint256",
);

type SolidityUintType = typeof uintTypes[number];

const uintArrayTypes = tuple(
  "uint8[]",
  "uint16[]",
  "uint24[]",
  "uint32[]",
  "uint40[]",
  "uint48[]",
  "uint56[]",
  "uint64[]",
  "uint72[]",
  "uint80[]",
  "uint88[]",
  "uint96[]",
  "uint104[]",
  "uint112[]",
  "uint120[]",
  "uint128[]",
  "uint136[]",
  "uint144[]",
  "uint152[]",
  "uint160[]",
  "uint168[]",
  "uint176[]",
  "uint184[]",
  "uint192[]",
  "uint200[]",
  "uint208[]",
  "uint216[]",
  "uint224[]",
  "uint232[]",
  "uint240[]",
  "uint248[]",
  "uint256[]",
);

type SolidityUintArrayType = typeof uintArrayTypes[number];

const arrayBytesTypes = tuple(
  "bytes[]",
  "bytes1[]",
  "bytes2[]",
  "bytes3[]",
  "bytes4[]",
  "bytes5[]",
  "bytes6[]",
  "bytes7[]",
  "bytes8[]",
  "bytes9[]",
  "bytes10[]",
  "bytes11[]",
  "bytes12[]",
  "bytes13[]",
  "bytes14[]",
  "bytes15[]",
  "bytes16[]",
  "bytes17[]",
  "bytes18[]",
  "bytes19[]",
  "bytes20[]",
  "bytes21[]",
  "bytes22[]",
  "bytes23[]",
  "bytes24[]",
  "bytes25[]",
  "bytes26[]",
  "bytes27[]",
  "bytes28[]",
  "bytes29[]",
  "bytes30[]",
  "bytes31[]",
  "bytes32[]",
);

type SolidityBytesArrayType = typeof arrayBytesTypes[number];

const fixedArrayBytes32Types = tuple(
  "bytes32[1]",
  "bytes32[2]",
  "bytes32[3]",
  "bytes32[4]",
  "bytes32[5]",
  "bytes32[6]",
  "bytes32[7]",
  "bytes32[8]",
  "bytes32[9]",
  "bytes32[10]",
  "bytes32[11]",
  "bytes32[12]",
  "bytes32[13]",
  "bytes32[14]",
  "bytes32[15]",
  "bytes32[16]",
  "bytes32[17]",
  "bytes32[18]",
  "bytes32[19]",
  "bytes32[20]",
  "bytes32[21]",
  "bytes32[22]",
  "bytes32[23]",
  "bytes32[24]",
  "bytes32[25]",
  "bytes32[26]",
  "bytes32[27]",
  "bytes32[28]",
  "bytes32[29]",
  "bytes32[30]",
  "bytes32[31]",
  "bytes32[32]"
);

type SolidityBytes32ArrayType = typeof fixedArrayBytes32Types[number];

const fixedArrayStringTypes = tuple(
  "string[1]",
  "string[2]",
  "string[3]",
  "string[4]",
  "string[5]",
  "string[6]",
  "string[7]",
  "string[8]",
  "string[9]",
  "string[10]",
  "string[11]",
  "string[12]",
  "string[13]",
  "string[14]",
  "string[15]",
  "string[16]",
  "string[17]",
  "string[18]",
  "string[19]",
  "string[20]",
  "string[21]",
  "string[22]",
  "string[23]",
  "string[24]",
  "string[25]",
  "string[26]",
  "string[27]",
  "string[28]",
  "string[29]",
  "string[30]",
  "string[31]",
  "string[32]"
);

type SolidityStringArrayType = typeof fixedArrayStringTypes[number];

export type SolidityType =
  | "address"
  | "address[]"
  | "bool"
  | "string"
  | SolidityUintArrayType
  | SolidityBytesType
  | SolidityUintType
  | SolidityBytesArrayType
  | SolidityBytes32ArrayType
  | "tuple"
  | SolidityStringArrayType;

export type JSType =
  | "string"
  | "string[]"
  | "number"
  | "number[]"
  | "Address"
  | "Address[]"
  | "boolean"
  | "BigNumber[]"
  | "BigNumber"
  | "string[]";

interface Mapping {
  solidityType: SolidityType | SolidityType[];
  jsType: JSType;
}

const mappings: Mapping[] = [
  {
    solidityType: bytesTypes,
    jsType: "string",
  },
  {
    solidityType: arrayBytesTypes,
    jsType: "string[]"
  },
  {
    solidityType: fixedArrayBytes32Types,
    jsType: "string[]"
  },
  {
    solidityType: fixedArrayStringTypes,
    jsType: "string[]"
  },
  {
    solidityType: "string",
    jsType: "string",
  },
  {
    solidityType: "address",
    jsType: "Address",
  },
  {
    solidityType: "address[]",
    jsType: "Address[]",
  },
  {
    solidityType: "bool",
    jsType: "boolean",
  },
];

const inputMappings: Mapping[] = [
  ...mappings,
  {
    solidityType: uintTypes,
    jsType: "UInt",
  },
  {
    solidityType: uintArrayTypes,
    jsType: "UInt[]",
  },
];

const outputMappings: Mapping[] = [
  ...mappings,
  {
    solidityType: uintTypes,
    jsType: "BigNumber",
  },
  {
    solidityType: uintArrayTypes,
    jsType: "BigNumber[]",
  },
];

export const getMappings = (): Map<SolidityType, JSType> => {
  const allMappings: Mapping[] = inputMappings;
  return mapper(allMappings);
};

export const getOutputMappings = (): Map<SolidityType, JSType> => {
  const allMappings: Mapping[] = outputMappings;
  return mapper(allMappings);
};

const mapper = (allMappings: Mapping[]): Map<SolidityType, JSType> => {
  let result = new Map<SolidityType, JSType>();
  allMappings.forEach(s => {
    if (s.solidityType instanceof Array) {
      s.solidityType.forEach(item => {
        result.set(item, s.jsType);
      });
      return;
    }
    result.set(s.solidityType, s.jsType);
  });
  return result;
};

