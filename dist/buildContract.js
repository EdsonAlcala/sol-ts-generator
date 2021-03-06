"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solidityTypes_1 = require("./solidityTypes");
var mappings = solidityTypes_1.getMappings();
var outputMappings = solidityTypes_1.getOutputMappings();
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
    return output.components ? "any" : exports.translateType(output.type, true);
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
    var type = input.components ? exports.generateTupleType(input, exports.buildFunctionArgument) : exports.translateType(input.type);
    if (name.length === 0) {
        name = exports.unnamedArgumentName();
    }
    return name + ": " + type;
};
exports.translateType = function (type, isOutput) {
    if (isOutput === void 0) { isOutput = false; }
    var result = isOutput ? outputMappings.get(type) : mappings.get(type);
    if (!result) {
        var regex = new RegExp(/address\[(2[0-5][0-6]|1[0-9][0-9]|[1-9]?[0-9])]/i);
        if (regex.test(type.toString())) {
            var result_1 = isOutput
                ? "Address[]"
                : (function () {
                    var number = Number(type.match(/\d/g).join(""));
                    return "Address[" + number + "]";
                })();
            return result_1;
        }
        throw "Unexpected case! " + type;
    }
    return result;
};
exports.generateTupleType = function (tuple, generator) {
    if (tuple.type == "tuple[]") {
        return ("{" +
            tuple.components
                .map(function (component) { return "" + generator(component); })
                .join(", ") +
            "}[]");
    }
    return ("{" +
        tuple.components
            .map(function (component) { return "" + generator(component); })
            .join(", ") +
        "}");
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
