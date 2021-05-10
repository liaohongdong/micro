const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    rules: {
        'no-console': isProd ? 'error' : 'off',
        'no-debugger': isProd ? 'error' : 'off',
        'indent': ['error', 4],
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'keyword-spacing': ['error', {
            'before': true,
            after: true 
        }],
        'comma-spacing': ['error', {
            'before': false,
            'after': true 
        }],
        'max-len': ['error', {
            'code': 240,
            'ignoreRegExpLiterals': true,
            'ignoreComments': true,
        }],
        'no-empty-function': ['error', {
            'allow': ['functions'] 
        }],
        'array-callback-return': ['error'],
        'arrow-body-style': ['error', 'as-needed'],
        'object-property-newline': ['error'],
        'object-curly-newline': ['error', { 'consistent': true }],
        'camelcase': ['error'],
        'no-var': ['error'],
        'eqeqeq': ['error'],
        'no-else-return': ['error'],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-trailing-spaces': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'always',
            'imports': 'always',
            'exports': 'never',
            'functions': 'never'
        }]
    },

};