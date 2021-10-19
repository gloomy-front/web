module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier", // new
    "prettier/@typescript-eslint", // new
    "prettier/react", // new
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error"], // new
  },
};
