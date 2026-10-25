// Цветовая палитра темы
export interface ThemeColors {
  // Фоны
  bg:          { value: string };
  bgSecondary: { value: string };
  bgTertiary:  { value: string };
  bgAccent:    { value: string };

  // Текст
  fg:          { value: string };
  fgSecondary: { value: string };
  fgTertiary:  { value: string };
  fgInverse:   { value: string };

  // Бордеры
  border:      { value: string };
  borderStrong:{ value: string };

  // Акцент
  accent:      { value: string };
  accentHover: { value: string };
  accentSoft:  { value: string };
  accentFg:    { value: string };

  // Статусы
  success:     { value: string };
  successBg:   { value: string };
  warning:     { value: string };
  warningBg:   { value: string };
  error:       { value: string };
  errorBg:     { value: string };
}

// Тени темы
export interface ThemeShadows {
  sm: { value: string };
  md: { value: string };
  lg: { value: string };
}

// Полная структура темы
export interface ThemeTokens {
  color:  ThemeColors;
  shadow: ThemeShadows;
}
