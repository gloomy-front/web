module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "next"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
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
