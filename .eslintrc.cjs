/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {},
  overrides: [
    {
      files: ['src/views/**/*.vue'],
      rules: { 'vue/multi-word-component-names': 0 }
    },
    {
      files: ['src/types/*.ts'],
      rules: { '@typescript-eslint/no-unused-vars': 0 }
    }
  ]
}
