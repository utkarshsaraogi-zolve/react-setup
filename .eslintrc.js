/* eslint-disable no-undef */
const INDENTATION_VALUE = 4;

module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
    ],
    'rules': {
        // Layout and Formatting.
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'dot-notation': 'error',
        'eol-last': ['error', 'always'],
        'indent': ['error', INDENTATION_VALUE, { SwitchCase: INDENTATION_VALUE }],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', { 'code': 100 }],
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'switch-colon-spacing': ['error', {after: true, before: false}],
        'brace-style': ['error', 'stroustrup'],
        'no-duplicate-imports': 'error',

        // Suggestions: Code Guidelines
        'array-callback-return': 'error',
        'camelcase': [
            'error',
            {
                properties: 'always',
                ignoreDestructuring: false,
                ignoreImports: true,
                ignoreGlobals: true,
                allow: [],
            },
        ],
        'consistent-return': 'error',
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': ['error'],
        'eqeqeq': 'error',
        'init-declarations': ['error', 'always'],
        'prefer-const': 'error',
        'object-shorthand': 'error',
        'no-alert': 'error',
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-magic-numbers': ['error', {
            ignore: [0, 1],
            ignoreDefaultValues: true,
            ignoreArrayIndexes: true,
            detectObjects: false,
        }],
        'no-param-reassign': ['error', { props: false }],
        'no-template-curly-in-string': 'error',
        'no-use-before-define': 'error',

        // React Specific
        'react/jsx-key': 0,
        'jsx-quotes': ['error', 'prefer-single'],
    },
};
