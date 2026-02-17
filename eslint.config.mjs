import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: [
      'node_modules',
      'playwright-report',
      'test-results',
      'blob-report',
      'playwright/.cache',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      eqeqeq: 'error',
      curly: 'error',
    },
  },
  prettier,
]
