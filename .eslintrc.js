module.exports = {
  extends: 'airbnb-typescript-prettier',
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
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
