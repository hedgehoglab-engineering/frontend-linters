![hedgehog lab logo](https://github.com/hedgehoglab-engineering/frontend-linters/raw/main/assets/images/hhl-logo-dark.png)

# @hedgehoglab/stylelint-config-vue

This package contains the standard Stylelint configuration used on all hedgehog lab projects, both internally and for our clients.

## Usage

Add the config to your project dependencies:

```bash 
yarn add -D @hedgehoglab/stylelint-config-vue

or

pnpm add -D @hedgehoglab/stylelint-config-vue

or

npm install -D @hedgehoglab/stylelint-config-vue
```

Add the config to your `stylelint.config.js`:

```js
module.exports = {
    extends: ['@hedgehoglab/stylelint-config-vue'],
};
```

## Contributing

If you disagree with any rules in this linter, or feel additional rules should be added, please open an issue on this project to initiate an open dialogue with all team members. 

Please bear in mind this is a public repository, and all contributions follow the project [Code of Conduct](../../CODE_OF_CONDUCT.md).

For instructions on how to contribute code to this project, please see the [CONTRIBUTING.md](../../CONTRIBUTING.md).
