<p align="center">
  <img src="/images/logo.png" width="120" alt="TypeStrict">
  <h3 align="center">TypeStrict</h3> 
  <p align="center">Squash bugs before shipping them with TypeScript and TSLint!</p>
  <p align="center">TSLint config focused on maximizing type safety</p>
  <p align="center">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/typestrict.svg">
    <a href="/package.json"><img alt="Software License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"></a>
  </p>

</p>

# Installation

```bash
npm install --save-dev typestrict
```

or

```bash
yarn add --dev typestrict
```

# Usage

Create `tslint.json`:

```json
{
  "extends": "typestrict"
  // ... add here your own rules
}
```

and run `tslint -c ./tslint.json --project ./tsconfig.json --format stylish`.

Remember to use `strict` compiler setting in `tsconfig.json`!

_Please, for now ignore warning about deprecated rule, it's discussed [here](https://github.com/krzkaczor/TypeStrict/pull/4)_

# Description

All rules in this config are focused on catching bugs in your code and be as not annoying as possible. They don't
care about code style or formatting.

`TypeStrict` combines rules from various rule sets: [tslint](https://palantir.github.io/tslint/rules/),
[sonarTS](https://github.com/SonarSource/SonarTS),
[tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib).

## Complete rules list

### TSLint

- [await-promise](https://palantir.github.io/tslint/rules/await-promise/)
- [invalid-void](https://palantir.github.io/tslint/rules/invalid-void/)
- [no-async-without-await](https://palantir.github.io/tslint/rules/no-async-without-await/)
- [no-duplicate-super](https://palantir.github.io/tslint/rules/no-duplicate-super/)
- [no-floating-promises](https://palantir.github.io/tslint/rules/no-floating-promises/)
- [no-for-in](https://palantir.github.io/tslint/rules/no-for-in/)
- [no-inferred-empty-object-type](https://palantir.github.io/tslint/rules/no-inferred-empty-object-type/)
- [no-invalid-this](https://palantir.github.io/tslint/rules/no-invalid-this/)
- [no-misused-new](https://palantir.github.io/tslint/rules/no-misused-new/)
- [no-promise-as-boolean](https://palantir.github.io/tslint/rules/no-promise-as-boolean/)
- [no-unused-variable](https://palantir.github.io/tslint/rules/no-unused-variable/) (with `"check-parameters"` and `{"ignore-pattern": "^_" }`)
- [no-use-before-declare](https://palantir.github.io/tslint/rules/no-use-before-declare/)
- [restrict-plus-operands](https://palantir.github.io/tslint/rules/restrict-plus-operands/)
- [strict-comparisons](https://palantir.github.io/tslint/rules/strict-comparisons/)
- [use-isnan](https://palantir.github.io/tslint/rules/use-isnan/)

### SonarTS

- [no-accessor-field-mismatch](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-accessor-field-mismatch.md)
- [no-all-duplicated-branches](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-all-duplicated-branches.md)
- [no-collection-size-mischeck](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-collection-size-mischeck.md)
- [no-dead-store](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-dead-store.md)
- [no-duplicated-branches](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-duplicated-branches.md)
- [no-element-overwrite](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-element-overwrite.md)
- [no-empty-destructuring](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-empty-destructuring.md)
- [no-gratuitous-expressions](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-gratuitous-expressions.md)
- [no-identical-conditions](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-identical-conditions.md)
- [no-identical-expressions](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-identical-expressions.md)
- [no-ignored-return](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-ignored-return.md)
- [no-multiline-string-literals](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-multiline-string-literals.md)
- [no-self-assignment](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-self-assignment.md)
- [no-unconditional-jump](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-unconditional-jump.md)
- [no-unthrown-error](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-unthrown-error.md)
- [no-unused-array](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-unused-array.md)
- [no-useless-cast](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-useless-cast.md)
- [no-useless-increment](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-useless-increment.md)
- [no-variable-usage-before-declaration](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-variable-usage-before-declaration.md)

### Microsoft Contrib

- [promise-must-complete](https://github.com/Microsoft/tslint-microsoft-contrib/issues/34)

# Contributing

Do you have idea for new rule to be added? You don't agree with one of rules included? Feel free to create issue / PR.

Logo by [@codeandcats](https://github.com/codeandcats).

# License

MIT by [Krzysztof Kaczor](https://twitter.com/krzKaczor)
