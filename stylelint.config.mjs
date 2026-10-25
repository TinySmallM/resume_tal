const stylelintConfig = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  
  // Игнорируем сгенерированные файлы и системные папки
  ignoreFiles: [
    "node_modules/**",
    ".next/**",
    "src/app/generated/**",
  ],

  rules: {
    // 1. Сортировка CSS-свойств (логический порядок)
    "order/properties-order": [
      // Позиционирование
      "position", "top", "right", "bottom", "left", "z-index",
      // Блочная модель и Layout
      "display", "flex", "flex-direction", "justify-content", "align-items", "gap",
      "width", "height", "min-width", "max-width", "min-height", "max-height",
      "margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
      "padding", "padding-top", "padding-right", "padding-bottom", "padding-left",
      // Типографика
      "font-family", "font-size", "font-weight", "font-style", "line-height", "color", "text-align", "text-decoration",
      // Визуальное оформление
      "background", "background-color", "background-image", "border", "border-radius", "box-shadow", "opacity",
      // Анимации и прочее
      "transition", "transform", "cursor", "pointer-events"
    ],

    //camelCase
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$",

    "no-descending-specificity": null,

    // 4. Разрешаем vendor-префиксы (если вдруг понадобятся)
    "property-no-vendor-prefix": null,
  },
};

export default stylelintConfig;
