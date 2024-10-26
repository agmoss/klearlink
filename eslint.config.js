module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Disables ESLint rules that might conflict with Prettier
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    // Place to specify ESLint rules - can be customized as needed
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    '@typescript-eslint/no-unused-vars': 'warn', // Warn unused vars
    'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
  },
};
