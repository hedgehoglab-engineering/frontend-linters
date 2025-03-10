import { type Options } from 'prettier';

const config: Options = {
    singleQuote: true,
    arrowParens: 'always',
    bracketSpacing: true,
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    bracketSameLine: false,
    jsxSingleQuote: false,
    printWidth: 80,
    proseWrap: 'preserve',
    requirePragma: false,
    tabWidth: 4,
    trailingComma: 'all',
    useTabs: false,
    rangeStart: 0,
    endOfLine: 'auto',
    semi: true,
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

export default config;
