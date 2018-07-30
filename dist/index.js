"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var generate_1 = __importDefault(require("./generate"));
var Index = /** @class */ (function () {
    function Index() {
    }
    Index.prototype.hello = function () {
        return new generate_1.default().hello();
    };
    return Index;
}());
exports.default = Index;
