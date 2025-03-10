![hedgehog lab logo](./assets/images/hhl-logo-light.png#gh-dark-mode-only)
![hedgehog lab logo](./assets/images/hhl-logo-dark.png#gh-light-mode-only)

# hedgehog lab frontend linters

Monorepo for managing all the linter configs used on projects within the hedgehog labs organisation.

### Eslint

> [!NOTE]  
> The `@hedgehoglab/eslint-config` package pulls in all of the framework specific configs, so you should only need to pull in the specific config packages if there are incompatibilities.

- [@hedgehoglab/eslint-config](./packages/eslint-config)
- [@hedgehoglab/eslint-config-basic](./packages/eslint-config-basic)
- [@hedgehoglab/eslint-config-ts](./packages/eslint-config-ts)
- [@hedgehoglab/eslint-config-react](./packages/eslint-config-react)

### Prettier

- [@hedgehoglab/prettier-config](./packages/prettier-config)

### Stylelint

> [!NOTE]  
> The `@hedgehoglab/stylelint-config` package pulls in all of the framework/pre-processor specific configs, so you should only need to pull in the specific config packages if there are incompatibilities.

- [@hedgehoglab/stylelint-config](./packages/stylelint-config)
- [@hedgehoglab/stylelint-config-basic](./packages/stylelint-config-basic)
- [@hedgehoglab/stylelint-config-scss](./packages/stylelint-config-scss)


## Contributing

Please bear in mind this is a public repository.

For instructions on how to contribute code to this project, please see the [CONTRIBUTING.md](./CONTRIBUTING.md).
