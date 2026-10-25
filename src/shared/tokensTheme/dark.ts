import type { ThemeTokens } from './types';

export const darkTheme: ThemeTokens = {
  color: {
    bg:          { value: '#18181b' },
    bgSecondary: { value: '#27272a' },
    bgTertiary:  { value: '#3f3f46' },
    bgAccent:    { value: 'rgba(124, 58, 237, 0.1)' },

    fg:          { value: '#fafafa' },
    fgSecondary: { value: '#a1a1aa' },
    fgTertiary:  { value: '#71717a' },
    fgInverse:   { value: '#18181b' },

    border:      { value: '#3f3f46' },
    borderStrong:{ value: '#52525b' },

    accent:      { value: '#a78bfa' },
    accentHover: { value: '#c4b5fd' },
    accentSoft:  { value: 'rgba(167, 139, 250, 0.1)' },
    accentFg:    { value: '#c4b5fd' },

    success:     { value: '#34d399' },
    successBg:   { value: 'rgba(52, 211, 153, 0.1)' },
    warning:     { value: '#fbbf24' },
    warningBg:   { value: 'rgba(251, 191, 36, 0.1)' },
    error:       { value: '#f87171' },
    errorBg:     { value: 'rgba(248, 113, 113, 0.1)' },
  },

  shadow: {
    sm: { value: '0 1px 2px rgba(0, 0, 0, 0.3)' },
    md: { value: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)' },
    lg: { value: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4)' },
  },
};
