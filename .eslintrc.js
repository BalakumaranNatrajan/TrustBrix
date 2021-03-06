const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'redux-saga', 'react', 'jsx-a11y'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  "globals": {
    "createSandbox": true,
    "sinon": true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 'prettier/prettier': ['warn', prettierOptions],
    'arrow-body-style': [0],
    'camelcase': [0],
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'never'],
    'import/imports-first': 0,
    'import/newline-after-import': ["error", { "count": 2 }],
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    "linebreak-style": ["error", "windows"],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'no-plusplus': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'prefer-template': 2,
    'no-nested-ternary':0,
    "indent": [
      "error",
      2,
      {
        "MemberExpression": "off"
      }
    ],
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-closing-tag-location': 0,
    'react/no-access-state-in-setstate': 0,
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'react/jsx-max-props-per-line': [2, { maximum: 4, when: 'always' }],
    'react/jsx-closing-bracket-location': [2],
    'redux-saga/no-yield-in-race': 2,
    'redux-saga/yield-effects': 2,
    'require-yield': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [
              path.resolve(path.join(__dirname, 'node_modules')),
              path.resolve(path.join(__dirname, 'src')),
            ]
          }
        }
      },
    },
  },
};
