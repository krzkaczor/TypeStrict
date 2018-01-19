# TypeStrict

Tslint config focused on maximizing type safety 💪

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
}
```

and run `tslint -c ./tslint.json --project ./tsconfig.json --format stylish`.

Remember to use `strict` compiler setting in `tsconfig.json`!

# Description

All rules in this config are focused on catching bugs in your code and be as not annoying as possible. They don't
care about code style or formatting.

`TypeStrict` combines rules from various rule sets: [tslint](https://palantir.github.io/tslint/rules/),
[sonarTS](https://github.com/SonarSource/SonarTS),
[tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib).

## Complete rules list

### Tslint

* [await-promise](https://palantir.github.io/tslint/rules/await-promise/)
* [no-floating-promises](https://palantir.github.io/tslint/rules/no-floating-promises/)
* [no-unused-variable](https://palantir.github.io/tslint/rules/no-unused-variable/)
* [no-use-before-declare](https://palantir.github.io/tslint/rules/no-use-before-declare/)
* [no-duplicate-super](https://palantir.github.io/tslint/rules/no-duplicate-super/)
* [no-inferred-empty-object-type](https://palantir.github.io/tslint/rules/no-inferred-empty-object-type/)
* [no-invalid-this](https://palantir.github.io/tslint/rules/no-invalid-this/)
* [no-misused-new](https://palantir.github.io/tslint/rules/no-misused-new/)
* [restrict-plus-operands](https://palantir.github.io/tslint/rules/restrict-plus-operands/)
* [use-isnan](https://palantir.github.io/tslint/rules/use-isnan/)

### SonarTS

* [no-accessor-field-mismatch](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-accessor-field-mismatch.md)
* [no-all-duplicated-branches](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-all-duplicated-branches.md)
* [no-collection-size-mischeck](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-collection-size-mischeck.md)
* [no-dead-store](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-dead-store.md)
* [no-duplicated-branches](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-duplicated-branches.md)
* [no-element-overwrite](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-element-overwrite.md)
* [no-empty-destructuring](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-empty-destructuring.md)
* [no-gratuitous-expressions](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-gratuitous-expressions.md)
* [no-identical-conditions](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-identical-conditions.md)
* [no-identical-expressions](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-identical-expressions.md)
* [no-ignored-return](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-ignored-return.md)
* [no-multiline-string-literals](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-multiline-string-literals.md)
* [no-self-assignment](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-self-assignment.md)
* [no-unconditional-jump](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-unconditional-jump.md)
* [no-unthrown-error](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-unthrown-error.md)
* [no-unused-array](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-unused-array.md)
* [no-useless-cast](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-useless-cast.md)
* [no-useless-increment](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-useless-increment.md)
* [no-variable-usage-before-declaration](https://github.com/SonarSource/SonarTS/blob/HEAD/sonarts-core/docs/rules/no-variable-usage-before-declaration.md)

### Microsoft Contrib

* [promise-must-complete](https://github.com/Microsoft/tslint-microsoft-contrib/issues/34)

# Contributing

Do you have idea for new rule to be added? You don't agree with one of rules included? Feel free to create issue / PR.

# License

MIT by [Krzysztof Kaczor](https://twitter.com/krzKaczor)
