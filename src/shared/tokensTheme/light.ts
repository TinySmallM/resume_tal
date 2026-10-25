import type { ThemeTokens } from './types';

export const lightTheme: ThemeTokens = {
  color: {
    bg:          { value: '#ffffff' },
    bgSecondary: { value: '#f5f5f5' },
    bgTertiary:  { value: '#e5e7eb' },
    bgAccent:    { value: '#f5f3ff' },

    fg:          { value: '#18181b' },
    fgSecondary: { value: '#52525b' },
    fgTertiary:  { value: '#71717a' },
    fgInverse:   { value: '#ffffff' },

    border:      { value: '#e5e7eb' },
    borderStrong:{ value: '#d4d4d8' },

    accent:      { value: '#7c3aed' },
    accentHover: { value: '#6d28d9' },
    accentSoft:  { value: '#f5f3ff' },
    accentFg:    { value: '#6d28d9' },

    success:     { value: '#10b981' },
    successBg:   { value: '#ecfdf5' },
    warning:     { value: '#f59e0b' },
    warningBg:   { value: '#fffbeb' },
    error:       { value: '#ef4444' },
    errorBg:     { value: '#fef2f2' },
  },

  shadow: {
    sm: { value: '0 1px 2px rgba(0, 0, 0, 0.05)' },
    md: { value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' },
    lg: { value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)' },
  },
};
