module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest-dom/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest-dom'
  ],
  rules: {
    'strict': 0,
    'comma-dangle': 0,
    'default-param-last': 0,
    'no-console': 2,
    'class-methods-use-this': 0,
    'no-alert': 2,
    'arrow-body-style': 0,
    'no-compare-neg-zero': 2,
    'one-var-declaration-per-line': 0,
    'no-plusplus': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/forbid-prop-types': [1, {'forbid': ['any','object']}],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '', '.jsx'] }],
    'react/destructuring-assignment': [1, 'never'],
    'react/function-component-definition': [2, { "namedComponents": "arrow-function" }]
  },
};
