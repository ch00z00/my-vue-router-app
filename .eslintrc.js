module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/no-unused-vars': 'warn',
  },
}
