// src/index.ts
var config = {
  semi: false,
  singleQuote: true,
  arrowParens: "avoid",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  bracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: "preserve",
  requirePragma: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  rangeStart: 0,
  endOfLine: "auto"
  // TODO: Figure out how this is configured in the next template
  // importOrder: [
  //     '^@core/(.*)$',
  //     '^@server/(.*)$',
  //     '^@ui/(.*)$',
  //     '^[./]',
  // ],
  // importOrderSeparation: true,
  // importOrderSortSpecifiers: true,
};
var src_default = config;
export {
  src_default as default
};
