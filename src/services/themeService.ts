import { safeLocalStorage } from '@/lib/storage';
import type { Theme } from '@/models';
import { THEME_KEY, THEME_VALUE } from '@/models';

export function set(theme: Theme) {
  safeLocalStorage.set(THEME_KEY, theme);
  document.documentElement.dataset.theme = theme;
}

export function get(): Theme {
  let theme = safeLocalStorage.get(THEME_KEY) as Theme | undefined;
  if (theme) return theme;
  theme ??= document.documentElement.dataset.theme as Theme | undefined;
  return theme ?? THEME_VALUE.light;
}
