import type { Theme } from '@/models';

export function set(theme: Theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.dataset.theme = theme;
}

export function get(): Theme {
  let theme = localStorage.getItem('theme') as Theme | undefined;
  if (theme) return theme;
  theme ??= document.documentElement.dataset.theme as Theme | undefined;
  return theme ?? 'light';
}
