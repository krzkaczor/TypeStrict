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

All rules in this config are focused on catching bugs in your code before you run it. They don't
care about code style or formatting.

It combines rules from different rule sets: [tslint](https://palantir.github.io/tslint/rules/),
[sonarTS](https://github.com/SonarSource/SonarTS),
[tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib) (more rules coming
soon).
