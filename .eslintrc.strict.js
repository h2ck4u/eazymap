module.exports = {
  extends: '.eslintrc.js',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['ts-exports'],
      rules: {
        'ts-exports/unused-exports': 'error',
      }
    }
  ]
}
