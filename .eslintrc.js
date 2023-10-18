module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: ['shared'],
        patterns: ['shared/api/*/*', 'shared/config/*/*', 'shared/lib/*/*', 'shared/ui/*/*'],
      },
    ],
    '@typescript-eslint/space-before-blocks': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'object-curly-spacing': ['error', 'always'],
    'padding-line-between-statements': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'no-unsafe-optional-chaining': 'off',
  },
};
