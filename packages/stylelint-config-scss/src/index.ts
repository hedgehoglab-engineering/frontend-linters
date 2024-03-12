import { type Config } from 'stylelint';

const config: Config = {
    plugins: [
        'stylelint-scss',
    ],
    extends: [
        'stylelint-config-recommended-scss',
    ],
    rules: {
        'scss/at-extend-no-missing-placeholder': [
            true,
        ],
        'scss/at-if-no-null': [
            true,
        ],
        'scss/load-no-partial-leading-underscore': [
            true,
        ],
        'scss/at-import-partial-extension': [
            'never',
        ],
        'scss/at-rule-no-unknown': [
            true,
        ],
        'scss/comment-no-empty': [
            true,
        ],
        'scss/declaration-nested-properties-no-divided-groups': [
            true,
        ],
        'scss/dollar-variable-no-missing-interpolation': [
            true,
        ],
        'scss/function-quote-no-quoted-strings-inside': [
            true,
        ],
        'scss/function-unquote-no-unquoted-strings-inside': [
            true,
        ],
        'scss/no-duplicate-mixins': [
            true,
        ],
        'scss/no-global-function-names': null,
        'scss/operator-no-newline-after': [
            true,
        ],
        'scss/operator-no-newline-before': [
            true,
        ],
        'scss/operator-no-unspaced': [
            true,
        ],
    }
};

export default config;
