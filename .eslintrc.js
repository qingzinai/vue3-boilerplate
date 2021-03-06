module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'plugin:vue/essential',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    'vue/no-v-model-argument': 'off',
    'arrow-parens': 'off'
  }
}
