"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var glob_1 = __importDefault(require("glob"));
var globPromise = function (pattern, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        glob_1.default(pattern, options, function (err, files) {
            if (err) {
                reject(err);
            }
            resolve(files);
        });
    });
};
exports.default = globPromise;
