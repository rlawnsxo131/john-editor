export type Theme = 'light' | 'dark';

export const THEME_KEY = 'theme';
export const THEME_VALUE: Record<Theme, Theme> = {
  light: 'light',
  dark: 'dark',
} as const;
