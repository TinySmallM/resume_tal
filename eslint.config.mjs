import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/app/generated/**",
  ]),

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Включаем строгую сортировку импортов и экспортов
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      
      "sort-imports": "off",
      "import/order": "off",

      "eol-last": ["error", "always"],
    },
  },
]);

export default eslintConfig;
