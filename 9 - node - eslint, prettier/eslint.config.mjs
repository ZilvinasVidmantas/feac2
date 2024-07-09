import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      "no-console": "error",
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "no-unused-vars": ["error"],
      "prefer-template": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
    }
  },
  {
    languageOptions: {
      globals: globals.node
    }
  },
  {
    ignores: ["node_modules/**/*"]
  },
  pluginJs.configs.recommended,
];