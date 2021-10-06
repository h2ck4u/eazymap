module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: [
    'import',
    'promise',
    'json-format',
  ],
  rules: {
    'max-len': ['error', 120],
    'multiline-comment-style': 'off',
    'no-trailing-spaces': ['error', { 'ignoreComments': true }],
    'promise/catch-or-return': 'off',
    'promise/always-return': 'off'
  },
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb-typescript',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      settings: {
        'import/resolver': {
          typescript: {}
        }
      },
      rules: {
        'semi': 'off',
        'quotes': ['error', 'single'],
        'no-bitwise': ['error', {allow: ['>>']}],
        'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
        'no-shadow': 'off',
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': ['error', {devDependencies: ['**/__*__/*', '**/__coverage__.*']}],
        'import/prefer-default-export': 'off',
        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
        'no-console': 'off',
        'no-restricted-syntax': ['error', 'WithStatement', 'BinaryExpression[operator="in"]'],
        'object-curly-newline': ['error', {consistent: true}],
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/comma-dangle': ['error', {
          functions: 'never', objects: 'always-multiline', arrays: 'always-multiline'
        }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/space-before-function-paren': ['error', 'always'],
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/class-name-casing': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'never'],
        "@typescript-eslint/no-shadow": ['error'],

        'max-len': ['warn', 120, {
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreComments: true
        }],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow'
          },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            custom: {match: true, regex: '^[is|should|enable|require|force|IS|ENABLE]'}
          },
          {
            selector: 'variable',
            types: ['array'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            custom: {match: true, regex: '[s|List|S|LIST]$'}
          },
        ]
      }
    }
  ]
}
