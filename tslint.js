const { join, dirname } = require("path");

const sonarTsRoot = dirname(require.resolve("tslint-sonarts"));
const microsoftContribRoot = dirname(require.resolve("tslint-microsoft-contrib"));

module.exports = {
  rulesDirectory: [join(sonarTsRoot, "lib/rules"), microsoftContribRoot],
  rules: {
    /* tslint */
    "await-promise": [true, "Bluebird"],
    "no-floating-promises": [true, "Bluebird"],
    "no-unused-variable": true,
    "no-use-before-declare": true,
    "no-duplicate-super": true,
    "no-inferred-empty-object-type": true,
    "no-invalid-this": true,
    "no-misused-new": true,
    "restrict-plus-operands": true,
    "use-isnan": true,

    /* sonarts */
    "no-accessor-field-mismatch": true,
    "no-all-duplicated-branches": true,
    "no-collection-size-mischeck": true,
    "no-dead-store": true,
    "no-duplicated-branches": true,
    "no-element-overwrite": true,
    "no-empty-destructuring": true,
    "no-gratuitous-expressions": true,
    "no-identical-conditions": true,
    "no-identical-expressions": true,
    "no-ignored-return": true,
    "no-multiline-string-literals": true,
    "no-same-line-conditional": true,
    "no-self-assignment": true,
    "no-unconditional-jump": true,
    "no-unthrown-error": true,
    "no-unused-array": true,
    "no-useless-cast": true,
    "no-useless-increment": true,
    "no-variable-usage-before-declaration": true,

    /* microsoft-contrib */
    "promise-must-complete": true
  }
};
