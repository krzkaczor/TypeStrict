<p align="center">
  <img src="/images/logo.png" width="120" alt="TypeStrict">
  <h3 align="center">TypeStrict</h3> 
  <p align="center">Squash bugs before shipping them with TypeScript and ESLint!</p>
  <p align="center">ESLint config focused on maximizing type safety</p>
  <p align="center">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/typestrict.svg">
    <a href="/package.json"><img alt="Software License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"></a>
  </p>

</p>

# Installation

```bash
npm install --save-dev @typescript-eslint/eslint-plugin eslint-plugin-sonarjs eslint-config-typestrict
```

👉 If you still use TSLint please use [typestrict@1](https://github.com/krzkaczor/TypeStrict/tree/838c8eaa599e349327d5eba8f40f70d572dc3be0)

# Usage

In your `.eslintrc.json`:

```json
{
  "extends": "typestrict"
  // ... add here your own rules
}
```

Unfortunately, you need to install plugins that we depend on manually: `@typescript-eslint/eslint-plugin`, `eslint-plugin-sonarjs`

Remember to use `strict` compiler setting in `tsconfig.json`!

# Description

All rules in this config are focused on catching bugs in your code and be as not annoying as possible. They don't
care about your code style or formatting.

`TypeStrict` combines rules from various rule sets: [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin),
[sonarJS](https://github.com/SonarSource/SonarJS),

## Complete rules list

### ESLint

- [constructor-super](https://eslint.org/docs/rules/constructor-super)
- [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)
- [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax) (with `"check-parameters"` and `{"ignore-pattern": "^_" }`)
- [use-isnan](https://eslint.org/docs/rules/use-isnan)

### TypeScript ESLint

- [@typescript-eslint/no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md) with `{"argsIgnorePattern": "^_"}`
- [@typescript-eslint/await-thenable](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md)
- [@typescript-eslint/no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md)
- [@typescript-eslint/no-misused-new](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md)
- [@typescript-eslint/no-use-before-define](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md)
- [@typescript-eslint/restrict-plus-operands](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md)
- [@typescript-eslint/no-unnecessary-condition](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md)

### SonarTS

- [no-all-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-all-duplicated-branches.md)
- [no-collection-size-mischeck](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collection-size-mischeck.md)
- [no-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicated-branches.md)
- [no-element-overwrite](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-element-overwrite.md)
- [no-identical-conditions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-conditions.md)
- [no-identical-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md)

# Contributing

Do you have idea for new rule to be added? You don't agree with one of rules included? Feel free to create issue / PR.

Logo by [@codeandcats](https://github.com/codeandcats).

# License

MIT by [Krzysztof Kaczor](https://twitter.com/krzKaczor)
