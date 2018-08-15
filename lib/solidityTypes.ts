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

export type SolidityType =
  | "address"
  | "address[]"
  | "bool"
  | "string"
  | "uint256[]"
  | SolidityBytesType
  | SolidityUintType;

export type JSType = "string" | "uint" | "Address" | "Address[]" | "boolean";

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
    solidityType: uintTypes,
    jsType: "uint",
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

export const getMappings = (): Map<SolidityType, JSType> => {
  const allMappings: Mapping[] = mappings;
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
