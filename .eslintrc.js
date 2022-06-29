module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
  },
}
