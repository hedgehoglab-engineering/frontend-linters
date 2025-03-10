import basic from '@hedgehoglab/eslint-config-basic';
import react from '@hedgehoglab/eslint-config-react';
import ts from '@hedgehoglab/eslint-config-ts';
import { type Linter } from 'eslint';

const config: Linter.Config[] = [
    basic,
    react,
    ts,
];

export default config;
