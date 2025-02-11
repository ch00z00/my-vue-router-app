module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier',
    'eslint-config-standard',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // 必要に応じてルールを追加・変更
    'vue/no-unused-vars': 'warn', // 未使用の変数を警告
  },
};
