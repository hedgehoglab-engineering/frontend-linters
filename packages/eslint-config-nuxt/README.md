![hedgehog lab logo](https://github.com/hedgehoglab-engineering/frontend-linters/raw/main/assets/images/hhl-logo-dark.png)

# @hedgehoglab/eslint-config-nuxt

This package contains the standard ESlint configuration used on all hedgehog lab projects, both internally and for our clients.

This package is meant to be used with eslint configs using the new [ESlint flat config](https://eslint.org/docs/latest/use/configure/migration-guide#start-using-flat-config-files) format.

> [!NOTE]  
> This package contains Nuxt-specific rules, and not the basic rules. Please pull in the basic config alongside this one as needed.

## Usage

Add the config to your project dependencies:

```bash 
yarn add -D @hedgehoglab/eslint-config-nuxt

or

pnpm add -D @hedgehoglab/eslint-config-nuxt

or

npm install -D @hedgehoglab/eslint-config-nuxt
```

Add the config to your `eslint.config.js`:

```js
import hedgehogLabNuxt from '@hedgehoglab/eslint-config-nuxt';

export default [
    hedgehogLabNuxt,
    
    // ...any other config objects
];
```

## Contributing

If you disagree with any rules in this linter, or feel additional rules should be added, please open an issue on this project to initiate an open dialogue with all team members. 

Please bear in mind this is a public repository, and all contributions follow the project [Code of Conduct](../../CODE_OF_CONDUCT.md).

For instructions on how to contribute code to this project, please see the [CONTRIBUTING.md](../../CONTRIBUTING.md).
