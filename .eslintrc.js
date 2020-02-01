module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended',
      '@vue/typescript'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      '@typescript-eslint/indent': ["error", 4, { "SwitchCase": 1 }],
      "vue/html-indent": ["warn", 4, {
          "attribute": 1,
          "baseIndent": 1,
          "closeBracket": 0,
          "alignAttributesVertically": true,
          "ignores": [],
      }],
      '@typescript-eslint/semi': ["warn"]
    },
    parserOptions: {
      parser: '@typescript-eslint/parser'
    }
  }
  