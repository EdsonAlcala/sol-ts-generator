"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solidityTypes_1 = require("./solidityTypes");
var mappings = solidityTypes_1.getMappings();
exports.buildContract = function (definition) {
    return "\n        export interface " + definition.contractName + "Instance extends ContractInstance {\n          " + exports.buildMembers(definition.abi) + "\n        }\n      ";
};
exports.buildMembers = function (abi) {
    return abi.map(exports.buildMember).join("\n");
};
exports.buildMember = function (member) {
    switch (member.type) {
        case "function":
            return exports.buildFunctionMember(member);
        case "event":
            return exports.buildEventMember(member);
        case "constructor":
            return exports.buildConstructorMember(member);
        case "fallback":
            return exports.buildFallbackMember(member);
        default:
            throw "Exhaustiveness miss!";
    }
};
exports.buildFunctionMember = function (member) {
    var args = member.inputs.map(exports.buildFunctionArgument).join(", ");
    if (args.length > 0) {
        args += ", ";
    }
    return member.name + "(" + args + "options?: TransactionOptions): " + exports.translateOutputs(member.outputs) + ";";
};
exports.translateOutputs = function (outputs) {
    var valueType;
    if (outputs.length === 1) {
        valueType = exports.translateOutput(outputs[0]);
    }
    else if (outputs.length === 0) {
        valueType = "void";
    }
    else {
        valueType = "[" + outputs.map(exports.translateOutput).join(", ") + "]";
    }
    return "Promise<" + valueType + ">";
};
exports.translateOutput = function (output) {
    return exports.translateType(output.type, { UInt: "BigNumber.BigNumber" });
};
var unnamedArgumentNumber = 0;
exports.unnamedArgumentName = function () {
    return "unnamed" + unnamedArgumentNumber++;
};
exports.buildFunctionArgument = function (input) {
    var name = input.name;
    if (name[0] == "_") {
        name = name.slice(1);
    }
    var type = exports.translateType(input.type);
    if (name.length === 0) {
        name = exports.unnamedArgumentName();
    }
    return name + ": " + type;
};
exports.translateType = function (type, options) {
    if (options === void 0) { options = { UInt: "UInt" }; }
    var result = mappings.get(type);
    if (!result) {
        throw "Unexpected case! " + type;
    }
    if (type == "uint256[]") {
        return options.UInt + "[]";
    }
    return result;
};
exports.buildEventMember = function (_member) {
    return "";
};
exports.buildConstructorMember = function (_member) {
    return "";
};
exports.buildFallbackMember = function (_member) {
    return "";
};
