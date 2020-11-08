module.exports = {
  plugins: ["@typescript-eslint", "sonarjs"],
  rules: {
    // basics
    "constructor-super": "error",
    "no-invalid-this": "error",
    "no-restricted-syntax": ["error", "ForInStatement"],
    "use-isnan": "error",

    // typescript-eslint
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "ignoreRestSiblings": true,
        "vars": "all",
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/no-unnecessary-condition": ["error", { "allowConstantLoopConditions": true }],

    // sonarts
    "sonarjs/no-all-duplicated-branches": "error",
    "sonarjs/no-element-overwrite": "error",
    "sonarjs/no-collection-size-mischeck": "error",
    "sonarjs/no-duplicated-branches": "error",
    "sonarjs/no-identical-conditions": "error",
    "sonarjs/no-identical-expressions": "error"

    // sonarTS rules that are not yet part of sonarJS
    // we can enable them once they are implemented or find a replacement
    //       "sonarjs/no-accessor-field-mismatch": "error",
    //       "sonarjs/no-dead-store": "error",
    //       "sonarjs/no-empty-destructuring": "error",
    //       "sonarjs/no-gratuitous-expressions": "error",
    //       "sonarjs/no-ignored-return": "error",
    //       "sonarjs/no-inferred-empty-object-type": "error",
    //       "sonarjs/no-multiline-string-literals": "error",
    //       "sonarjs/no-promise-as-boolean": "error",
    //       "sonarjs/no-self-assignment": "error",
    //       "sonarjs/no-unconditional-jump": "error",
    //       "sonarjs/no-unthrown-error": "error",
    //       "sonarjs/no-unused-array": "error",
    //       "sonarjs/no-useless-cast": "error",
    //       "sonarjs/no-useless-increment": "error",
    //       "sonarjs/promise-must-complete": "error",
    //       "sonarjs/strict-comparisons": "error"
  }
};
