module.exports = {
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'no-alert': 'off',
    'no-unused-expressions': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  plugins: ['only-warn'],
};
