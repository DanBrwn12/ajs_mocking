module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        process: "readonly",
        module: "readonly",
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        jest: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "never"],
      "quotes": ["error", "double"],
    },
  },
  {
    ignores: [
      "node_modules/",
      "coverage/",
      "dist/",
    ],
  },
]