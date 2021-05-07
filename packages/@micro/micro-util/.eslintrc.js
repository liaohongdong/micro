module.exports = {
    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: ['vantop'],
    rules: {
    },
    overrides: [{
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        extends: ['plugin:@typescript-eslint/recommended'],
        rules: {
            // 优先使用 interface 而不是 type
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            '@typescript-eslint/explicit-module-boundary-types': [
                'warn',
                {
                    allowArgumentsExplicitlyTypedAsAny: true,
                }
            ],
            '@typescript-eslint/no-explicit-any': 'off',
        },
    }],
};
