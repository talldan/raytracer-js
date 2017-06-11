const path = require('path');

module.exports = {
  extends: path.join(__dirname, 'base-lint-config.js'),
  env: {
    es6: true
  },
  rules: {
    'no-cond-assign': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': 2,
    'brace-style': 2,
    camelcase: [2, { properties: 'never' }],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [2, { before: true, after: true, overrides: {} }],
    'max-statements-per-line': [1, { max: 1 }],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-nested-ternary': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'one-var': [2, {
      var: 'never',
      let: 'never',
      const: 'never'
    }],
    'space-in-parens': [2, 'never'],
    'padded-blocks': [1, 'never'],
    'quote-props': [1, 'as-needed'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': 2,
    'no-duplicate-imports': 2,
    'no-useless-constructor': 2,
    'no-var': 1,
    'prefer-const': 1,
    'prefer-template': 1,
    'template-curly-spacing': [2, 'never']
  }
};
