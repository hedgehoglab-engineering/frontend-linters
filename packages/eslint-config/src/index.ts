import basic from '@hedgehoglab/eslint-config-basic';
import vue from '@hedgehoglab/eslint-config-vue';
import nuxt from '@hedgehoglab/eslint-config-nuxt';
import react from '@hedgehoglab/eslint-config-react';
import ts from '@hedgehoglab/eslint-config-ts';
import { type Linter } from 'eslint';

const config: Linter.FlatConfig[] = [
    basic,
    vue,
    nuxt,
    react,
    ts,
];

export default config;
