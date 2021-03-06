module.exports = {
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
  },
  plugins: [
    react,
    babel
  ],
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'func-names': 0,
    'arrow-body-style': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.md'] }],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'consistent-return': 0,
    'no-redeclare': 0,
    'react/require-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-indent': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'react/no-danger': 0,
    'comma-dangle': 0,
    'no-unused-expressions': [1, { "allowShortCircuit": true }],
    'linebreak-style': 0,
    'no-lonely-if': 0,
    'no-restricted-syntax': 0,
    'no-mixed-operators': 0,
    'class-methods-use-this': 0,
    'camelcase': 'off',
    'no-bitwise': 0,
    'no-plusplus': 0,
    'no-script-url': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ]
  }
};
