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
var import_eslint_plugin_vue = __toESM(require("eslint-plugin-vue"), 1);
var import_eslint_plugin_vuejs_accessibility = __toESM(require("eslint-plugin-vuejs-accessibility"), 1);
var config = {
  plugins: {
    vue: import_eslint_plugin_vue.default,
    "vuejs-accessibility": import_eslint_plugin_vuejs_accessibility.default
  },
  rules: {
    "vue/attribute-hyphenation": [
      1,
      "always"
    ],
    "vue/attributes-order": [
      1,
      {
        "order": [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "SLOT",
          "OTHER_ATTR",
          "CONTENT",
          "TWO_WAY_BINDING",
          "EVENTS",
          "OTHER_DIRECTIVES"
        ],
        "alphabetical": false
      }
    ],
    "vue/component-definition-name-casing": [
      1,
      "kebab-case"
    ],
    "vue/component-name-in-template-casing": [
      1,
      "kebab-case",
      {
        "registeredComponentsOnly": false
      }
    ],
    "vue/eqeqeq": [
      1
    ],
    "vue/html-closing-bracket-newline": [
      1,
      {
        "singleline": "never",
        "multiline": "always"
      }
    ],
    "vue/html-closing-bracket-spacing": [
      1,
      {
        "startTag": "never",
        "endTag": "never",
        "selfClosingTag": "always"
      }
    ],
    "vue/html-indent": [
      1,
      4,
      {
        "baseIndent": 1
      }
    ],
    "vue/html-quotes": [
      1,
      "double"
    ],
    "vue/key-spacing": [
      1,
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "vue/match-component-file-name": [
      1,
      {
        "extensions": [
          "jsx",
          "js",
          "vue"
        ],
        "shouldMatchCase": false
      }
    ],
    "vue/max-attributes-per-line": [
      1,
      {
        "singleline": {
          "max": 3
        },
        "multiline": {
          "max": 1
        }
      }
    ],
    "vue/mustache-interpolation-spacing": [
      1,
      "always"
    ],
    "vue/no-dupe-keys": [
      1,
      {
        "groups": []
      }
    ],
    "vue/no-duplicate-attributes": [
      1
    ],
    "vue/no-multi-spaces": [
      1
    ],
    "vue/no-shared-component-data": [
      1
    ],
    "vue/no-side-effects-in-computed-properties": [
      1
    ],
    "vue/no-textarea-mustache": [
      1
    ],
    "vue/no-unused-vars": [
      1
    ],
    "vue/script-setup-uses-vars": [
      1
    ],
    "vue/no-v-html": [
      0
    ],
    "vue/object-curly-spacing": [
      1,
      "always"
    ],
    "vue/order-in-components": [
      1,
      {
        "order": [
          [
            "name",
            "delimiters",
            "functional",
            "model"
          ],
          [
            "components",
            "directives",
            "filters"
          ],
          [
            "parent",
            "mixins",
            "extends",
            "provide",
            "inject"
          ],
          "el",
          "template",
          "props",
          "propsData",
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          "render",
          "renderError"
        ]
      }
    ],
    "vue/require-default-prop": [
      1
    ],
    "vue/require-prop-types": [
      1
    ],
    "vue/return-in-computed-property": [
      1,
      {
        "treatUndefinedAsUnspecified": true
      }
    ],
    "vue/script-indent": [
      1,
      4,
      {
        "baseIndent": 1,
        "switchCase": 1
      }
    ],
    "vue/this-in-template": [
      1,
      "never"
    ],
    "vue/v-bind-style": [
      1,
      "shorthand"
    ],
    "vue/v-on-function-call": [
      1,
      "never"
    ],
    "vue/v-on-style": [
      1,
      "shorthand"
    ],
    "vue/multi-word-component-names": [
      "error"
    ],
    "vue/no-arrow-functions-in-watch": [
      "error"
    ],
    "vue/no-async-in-computed-properties": [
      "error"
    ],
    "vue/no-child-content": [
      "error"
    ],
    "vue/no-computed-properties-in-data": [
      "error"
    ],
    "vue/no-deprecated-data-object-declaration": [
      "error"
    ],
    "vue/no-deprecated-destroyed-lifecycle": [
      "error"
    ],
    "vue/no-deprecated-dollar-listeners-api": [
      "error"
    ],
    "vue/no-deprecated-dollar-scopedslots-api": [
      "error"
    ],
    "vue/no-deprecated-events-api": [
      "error"
    ],
    "vue/no-deprecated-filter": [
      "error"
    ],
    "vue/no-deprecated-functional-template": [
      "error"
    ],
    "vue/no-deprecated-html-element-is": [
      "error"
    ],
    "vue/no-deprecated-inline-template": [
      "error"
    ],
    "vue/no-deprecated-props-default-this": [
      "error"
    ],
    "vue/no-deprecated-router-link-tag-prop": [
      "error"
    ],
    "vue/no-deprecated-scope-attribute": [
      "error"
    ],
    "vue/no-deprecated-slot-attribute": [
      "error"
    ],
    "vue/no-deprecated-slot-scope-attribute": [
      "error"
    ],
    "vue/no-deprecated-v-bind-sync": [
      "error"
    ],
    "vue/no-deprecated-v-is": [
      "error"
    ],
    "vue/no-deprecated-v-on-native-modifier": [
      "error"
    ],
    "vue/no-deprecated-v-on-number-modifiers": [
      "error"
    ],
    "vue/no-deprecated-vue-config-keycodes": [
      "error"
    ],
    "vue/no-dupe-v-else-if": [
      "error"
    ],
    "vue/no-export-in-script-setup": [
      "error"
    ],
    "vue/no-expose-after-await": [
      "error"
    ],
    "vue/no-lifecycle-after-await": [
      "error"
    ],
    "vue/no-mutating-props": [
      "error"
    ],
    "vue/no-parsing-error": [
      "error"
    ],
    "vue/no-ref-as-operand": [
      "error"
    ],
    "vue/no-reserved-component-names": [
      "error"
    ],
    "vue/no-reserved-keys": [
      "error"
    ],
    "vue/no-reserved-props": [
      "error"
    ],
    "vue/no-template-key": [
      "error"
    ],
    "vue/no-unused-components": [
      "error"
    ],
    "vue/no-use-computed-property-like-method": [
      "error"
    ],
    "vue/no-use-v-if-with-v-for": [
      "error"
    ],
    "vue/no-useless-template-attributes": [
      "error"
    ],
    "vue/no-v-for-template-key-on-child": [
      "error"
    ],
    "vue/no-v-text-v-html-on-component": [
      "error"
    ],
    "vue/no-watch-after-await": [
      "error"
    ],
    "vue/prefer-import-from-vue": [
      "error"
    ],
    "vue/require-component-is": [
      "error"
    ],
    "vue/require-prop-type-constructor": [
      "error"
    ],
    "vue/require-render-return": [
      "error"
    ],
    "vue/require-slots-as-functions": [
      "error"
    ],
    "vue/require-toggle-inside-transition": [
      "error"
    ],
    "vue/require-v-for-key": [
      "error"
    ],
    "vue/require-valid-default-prop": [
      "error"
    ],
    "vue/return-in-emits-validator": [
      "error"
    ],
    "vue/use-v-on-exact": [
      "error"
    ],
    "vue/valid-attribute-name": [
      "error"
    ],
    "vue/valid-define-emits": [
      "error"
    ],
    "vue/valid-define-props": [
      "error"
    ],
    "vue/valid-next-tick": [
      "error"
    ],
    "vue/valid-template-root": [
      "error"
    ],
    "vue/valid-v-bind": [
      "error"
    ],
    "vue/valid-v-cloak": [
      "error"
    ],
    "vue/valid-v-else-if": [
      "error"
    ],
    "vue/valid-v-else": [
      "error"
    ],
    "vue/valid-v-for": [
      "error"
    ],
    "vue/valid-v-html": [
      "error"
    ],
    "vue/valid-v-if": [
      "error"
    ],
    "vue/valid-v-is": [
      "error"
    ],
    "vue/valid-v-memo": [
      "error"
    ],
    "vue/valid-v-model": [
      "error"
    ],
    "vue/valid-v-on": [
      "error"
    ],
    "vue/valid-v-once": [
      "error"
    ],
    "vue/valid-v-pre": [
      "error"
    ],
    "vue/valid-v-show": [
      "error"
    ],
    "vue/valid-v-slot": [
      "error"
    ],
    "vue/valid-v-text": [
      "error"
    ],
    "vue/comment-directive": [
      "error"
    ],
    "vue/jsx-uses-vars": [
      "error"
    ],
    /**
     * Accessibility
     */
    "vuejs-accessibility/alt-text": [
      1
    ],
    "vuejs-accessibility/anchor-has-content": [
      1
    ],
    "vuejs-accessibility/aria-props": [
      1
    ],
    "vuejs-accessibility/aria-role": [
      1
    ],
    "vuejs-accessibility/aria-unsupported-elements": [
      1
    ],
    "vuejs-accessibility/click-events-have-key-events": [
      1
    ],
    "vuejs-accessibility/form-control-has-label": [
      1
    ],
    "vuejs-accessibility/heading-has-content": [
      1
    ],
    "vuejs-accessibility/iframe-has-title": [
      1
    ],
    "vuejs-accessibility/interactive-supports-focus": [
      1
    ],
    "vuejs-accessibility/mouse-events-have-key-events": [
      1
    ],
    "vuejs-accessibility/no-access-key": [
      1
    ],
    "vuejs-accessibility/no-autofocus": [
      1
    ],
    "vuejs-accessibility/no-distracting-elements": [
      1
    ],
    "vuejs-accessibility/no-onchange": [
      1
    ],
    "vuejs-accessibility/no-redundant-roles": [
      1
    ],
    "vuejs-accessibility/role-has-required-aria-props": [
      1
    ],
    "vuejs-accessibility/tabindex-no-positive": [
      1
    ]
  }
};
var src_default = config;
