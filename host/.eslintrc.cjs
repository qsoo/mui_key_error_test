const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      WARN,
      { allowConstantExport: true },
    ],
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/no-unknown-property': [ERROR, { ignore: ['css'] }],
    'react/require-default-props': OFF,
    'no-param-reassign': [ERROR, { props: false }],
    'no-restricted-syntax': OFF,
    'import/no-extraneous-dependencies': [
      ERROR,
      { devDependencies: ['vite.config.ts'] },
    ],
    '@typescript-eslint/consistent-type-definitions': OFF,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
};
