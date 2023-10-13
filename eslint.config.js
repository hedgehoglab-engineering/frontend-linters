import config from '@hedgehoglab/eslint-config';

export default [
    ...config,
    {
        ignores: [
            'scripts/*',
            'packages/*/dist/*',
        ],
    },
];
