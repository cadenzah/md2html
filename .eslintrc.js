module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "semi": ["error", "always"],
      "indent": 0,
      "comma-dangle": ["error", "never"],
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  };
  