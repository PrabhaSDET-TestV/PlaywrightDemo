import globals from 'globals';
import js from '@eslint/js';
import playwright from 'eslint-plugin-playwright';

export default [
  js.configs.recommended,
  {
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules, // Use Playwright recommended rules
      'no-console': 'warn', // Example custom rule
      'semi': ['error', 'always'], // Enforce semicolons
      'no-var': 'error', // Disallow `var`
      'playwright/no-test-only': 'error', // Disallow .only in Playwright test scripts
      'playwright/no-page-pause': 'error', // Disallow .pause in Playwright test scripts
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add Node.js globals
      },
    },
  },
];