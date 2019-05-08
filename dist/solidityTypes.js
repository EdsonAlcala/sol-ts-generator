"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tuple = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
var bytesTypes = tuple("bytes", "bytes1", "bytes2", "bytes3", "bytes4", "bytes5", "bytes6", "bytes7", "bytes8", "bytes9", "bytes10", "bytes11", "bytes12", "bytes13", "bytes14", "bytes15", "bytes16", "bytes17", "bytes18", "bytes19", "bytes20", "bytes21", "bytes22", "bytes23", "bytes24", "bytes25", "bytes26", "bytes27", "bytes28", "bytes29", "bytes30", "bytes31", "bytes32");
var uintTypes = tuple("uint8", "uint16", "uint24", "uint32", "uint40", "uint48", "uint56", "uint64", "uint72", "uint80", "uint88", "uint96", "uint104", "uint112", "uint120", "uint128", "uint136", "uint144", "uint152", "uint160", "uint168", "uint176", "uint184", "uint192", "uint200", "uint208", "uint216", "uint224", "uint232", "uint240", "uint248", "uint256");
var uintArrayTypes = tuple("uint8[]", "uint16[]", "uint24[]", "uint32[]", "uint40[]", "uint48[]", "uint56[]", "uint64[]", "uint72[]", "uint80[]", "uint88[]", "uint96[]", "uint104[]", "uint112[]", "uint120[]", "uint128[]", "uint136[]", "uint144[]", "uint152[]", "uint160[]", "uint168[]", "uint176[]", "uint184[]", "uint192[]", "uint200[]", "uint208[]", "uint216[]", "uint224[]", "uint232[]", "uint240[]", "uint248[]", "uint256[]");
var arrayBytesTypes = tuple("bytes[]", "bytes1[]", "bytes2[]", "bytes3[]", "bytes4[]", "bytes5[]", "bytes6[]", "bytes7[]", "bytes8[]", "bytes9[]", "bytes10[]", "bytes11[]", "bytes12[]", "bytes13[]", "bytes14[]", "bytes15[]", "bytes16[]", "bytes17[]", "bytes18[]", "bytes19[]", "bytes20[]", "bytes21[]", "bytes22[]", "bytes23[]", "bytes24[]", "bytes25[]", "bytes26[]", "bytes27[]", "bytes28[]", "bytes29[]", "bytes30[]", "bytes31[]", "bytes32[]");
var fixedArrayBytes32Types = tuple("bytes32[1]", "bytes32[2]", "bytes32[3]", "bytes32[4]", "bytes32[5]", "bytes32[6]", "bytes32[7]", "bytes32[8]", "bytes32[9]", "bytes32[10]", "bytes32[11]", "bytes32[12]", "bytes32[13]", "bytes32[14]", "bytes32[15]", "bytes32[16]", "bytes32[17]", "bytes32[18]", "bytes32[19]", "bytes32[20]", "bytes32[21]", "bytes32[22]", "bytes32[23]", "bytes32[24]", "bytes32[25]", "bytes32[26]", "bytes32[27]", "bytes32[28]", "bytes32[29]", "bytes32[30]", "bytes32[31]", "bytes32[32]");
var fixedArrayStringTypes = tuple("string[1]", "string[2]", "string[3]", "string[4]", "string[5]", "string[6]", "string[7]", "string[8]", "string[9]", "string[10]", "string[11]", "string[12]", "string[13]", "string[14]", "string[15]", "string[16]", "string[17]", "string[18]", "string[19]", "string[20]", "string[21]", "string[22]", "string[23]", "string[24]", "string[25]", "string[26]", "string[27]", "string[28]", "string[29]", "string[30]", "string[31]", "string[32]");
var mappings = [
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
var inputMappings = mappings.concat([
    {
        solidityType: uintTypes,
        jsType: "number",
    },
    {
        solidityType: uintArrayTypes,
        jsType: "number[]",
    },
]);
var outputMappings = mappings.concat([
    {
        solidityType: uintTypes,
        jsType: "BigNumber",
    },
    {
        solidityType: uintArrayTypes,
        jsType: "BigNumber[]",
    },
]);
exports.getMappings = function () {
    var allMappings = inputMappings;
    return mapper(allMappings);
};
exports.getOutputMappings = function () {
    var allMappings = outputMappings;
    return mapper(allMappings);
};
var mapper = function (allMappings) {
    var result = new Map();
    allMappings.forEach(function (s) {
        if (s.solidityType instanceof Array) {
            s.solidityType.forEach(function (item) {
                result.set(item, s.jsType);
            });
            return;
        }
        result.set(s.solidityType, s.jsType);
    });
    return result;
};
