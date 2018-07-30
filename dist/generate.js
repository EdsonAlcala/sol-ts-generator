"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __importDefault(require("./lib"));
var Generate = /** @class */ (function () {
    function Generate() {
    }
    Generate.prototype.hello = function () {
        return new lib_1.default().hello();
    };
    return Generate;
}());
exports.default = Generate;
