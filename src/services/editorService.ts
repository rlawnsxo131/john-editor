import { Monaco } from '@/lib/editor';
import type { Theme } from '@/models/theme';

export function initializeEditor(div: HTMLDivElement, theme: Theme) {
  const editor = Monaco.getInstance(div, theme);

  editor.setModel([
    {
      value: '{"name": "name", "age": "age"}',
      language: 'json',
    },
    {
      value: '{"name": "name", "age": "age"}',
      language: 'json',
    },
  ]);

  return editor;
}

export function cleanUp() {
  return Monaco.cleanUp();
}

export function setTheme(theme: Theme) {
  return Monaco.getInstance().setTheme(theme);
}

export function formatOrigin() {
  return Monaco.getInstance().formatOrigin();
}

export function formatModify() {
  return Monaco.getInstance().formatModify();
}
