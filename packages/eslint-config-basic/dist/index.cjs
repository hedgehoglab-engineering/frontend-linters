"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var pluginImport = __toESM(require("eslint-plugin-i"), 1);
var src_default = {
  plugins: {
    import: pluginImport
  },
  rules: {
    "arrow-parens": [
      1,
      "always"
    ],
    "arrow-spacing": [
      1,
      {
        "before": true,
        "after": true
      }
    ],
    "comma-dangle": [
      1,
      "always-multiline"
    ],
    "curly": [
      1
    ],
    "dot-location": [
      1,
      "property"
    ],
    "dot-notation": [
      1
    ],
    "eol-last": [
      1,
      "always"
    ],
    "eqeqeq": [
      1
    ],
    "indent": [
      1,
      4,
      {
        "SwitchCase": 1,
        "flatTernaryExpressions": false,
        "offsetTernaryExpressions": false,
        "ignoreComments": false
      }
    ],
    "key-spacing": [
      1
    ],
    "no-alert": [
      1
    ],
    "no-cond-assign": [
      1
    ],
    "no-console": [
      1
    ],
    "no-debugger": [
      1
    ],
    "no-duplicate-imports": [
      1
    ],
    "no-else-return": [
      1,
      {
        "allowElseIf": false
      }
    ],
    "no-empty": [
      1
    ],
    "no-empty-function": [
      1
    ],
    "no-eval": [
      2
    ],
    "no-floating-decimal": [
      1
    ],
    "no-implicit-coercion": [
      1,
      {
        "boolean": true,
        "number": true,
        "string": true,
        "disallowTemplateShorthand": false
      }
    ],
    "no-lonely-if": [
      1
    ],
    "no-mixed-spaces-and-tabs": [
      1
    ],
    "no-multiple-empty-lines": [
      1,
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 1
      }
    ],
    "no-restricted-imports": [
      "error",
      "lodash"
    ],
    "no-sparse-arrays": [
      1
    ],
    "no-template-curly-in-string": [
      1
    ],
    "no-unneeded-ternary": [
      1
    ],
    "no-unused-vars": [
      1
    ],
    "no-use-before-define": [
      1
    ],
    "no-useless-return": [
      1
    ],
    "no-var": [
      1
    ],
    "operator-linebreak": [
      1,
      "before"
    ],
    "prefer-arrow-callback": [
      1
    ],
    "prefer-const": [
      1
    ],
    "prefer-template": [
      1
    ],
    "quotes": [
      1,
      "single"
    ],
    "semi": [
      1,
      "always"
    ],
    "space-before-function-paren": [
      1,
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "template-curly-spacing": [
      1,
      "always"
    ],
    "yoda": [
      1,
      "never",
      {
        "exceptRange": true,
        "onlyEquality": false
      }
    ],
    "import/extensions": [
      1,
      "always"
    ]
  }
};
