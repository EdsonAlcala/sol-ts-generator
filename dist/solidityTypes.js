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
var mappings = [
    {
        solidityType: bytesTypes,
        jsType: "string",
    },
    {
        solidityType: arrayBytesTypes,
        jsType: "string[]",
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
        jsType: "UInt",
    },
    {
        solidityType: uintArrayTypes,
        jsType: "UInt[]",
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
