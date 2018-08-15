"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var command_line_args_1 = __importDefault(require("command-line-args"));
var DEFAULT_GLOB_PATTERN = "./build/contracts/*.json";
var DEFAULT_OUTDIR = "./types";
exports.parseArgs = function () {
    var optionDefinitions = [{ name: "glob", type: String }, { name: "outDir", type: String }];
    var rawOptions = command_line_args_1.default(optionDefinitions);
    return {
        glob: rawOptions.glob || DEFAULT_GLOB_PATTERN,
        outDir: rawOptions.outDir || DEFAULT_OUTDIR,
    };
};
