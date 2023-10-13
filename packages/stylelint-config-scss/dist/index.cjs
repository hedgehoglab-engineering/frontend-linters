"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var src_default = {
  plugins: [
    "stylelint-scss"
  ],
  extends: [
    "stylelint-config-recommended-scss"
  ],
  rules: {
    "scss/at-extend-no-missing-placeholder": [
      true
    ],
    "scss/at-if-no-null": [
      true
    ],
    "scss/at-import-no-partial-leading-underscore": [
      true
    ],
    "scss/at-import-partial-extension": [
      "never"
    ],
    "scss/at-rule-no-unknown": [
      true
    ],
    "scss/comment-no-empty": [
      true
    ],
    "scss/declaration-nested-properties-no-divided-groups": [
      true
    ],
    "scss/dollar-variable-no-missing-interpolation": [
      true
    ],
    "scss/function-quote-no-quoted-strings-inside": [
      true
    ],
    "scss/function-unquote-no-unquoted-strings-inside": [
      true
    ],
    "scss/no-duplicate-mixins": [
      true
    ],
    "scss/no-global-function-names": null,
    "scss/operator-no-newline-after": [
      true
    ],
    "scss/operator-no-newline-before": [
      true
    ],
    "scss/operator-no-unspaced": [
      true
    ]
  }
};

// fix-cjs-exports
if (module.exports.default) {
  Object.assign(module.exports.default, module.exports);
  module.exports = module.exports.default;
  delete module.exports.default;
}
