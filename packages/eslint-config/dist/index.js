// src/index.ts
import basic from "@hedgehoglab/eslint-config-basic";
import vue from "@hedgehoglab/eslint-config-vue";
import nuxt from "@hedgehoglab/eslint-config-nuxt";
import react from "@hedgehoglab/eslint-config-react";
import ts from "@hedgehoglab/eslint-config-ts";
var config = [
  basic,
  vue,
  nuxt,
  react,
  ts
];
var src_default = config;
export {
  src_default as default
};
