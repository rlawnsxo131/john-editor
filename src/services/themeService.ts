import type { Theme } from '@/@types';

export function set(theme: Theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.dataset.theme = theme;
}

export function get(): Theme {
  const theme = localStorage.getItem('theme') as Theme | undefined;
  if (theme) return theme;
  return 'light';
}
