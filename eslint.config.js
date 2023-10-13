import config from './packages/eslint-config/dist/index.js';

export default [
    ...config,
    {
        ignores: [
            'scripts/*',
            'packages/*/dist/*',
        ],
    },
];
