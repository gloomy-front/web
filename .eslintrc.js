module.exports = {
  "root": true,
  'env': {
    'browser': true
  },
  'rules': {
    'semi': 'warn',
    'quotes': [
      'error',
      'single'
    ],
    'no-empty-function': 'warn',
    'object-curly-spacing': [
      2,
      'always',
      {
        'arraysInObjects': false,
        'objectsInObjects': false
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    'react-hooks/rules-of-hooks': 'off',
  },
  "extends": [
    "next"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["./tsconfig.json"],
    "tsconfigRootDir": __dirname,
  }
}