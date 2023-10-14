import { type Config } from 'stylelint';

const config: Config = {
    extends: [
        '@hedgehoglab/stylelint-config-basic',
        '@hedgehoglab/stylelint-config-scss',
    ],
};

export default config;
