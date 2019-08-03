module.exports = {
  env: {
    es6: true,
    node: true
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-empty-pattern': 'off',
    'no-unneeded-ternary': 'off',
    radix: 'off'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': { typescript: {} }
  }
};
