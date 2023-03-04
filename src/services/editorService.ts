import type { HtmlContainerElement } from '@/@types';
import { Monaco } from '@/lib/editor';
import type { SupportLanguage, Theme } from '@/models';

export function initializeEditor(
  container: HtmlContainerElement,
  theme: Theme,
) {
  return new Promise((resolve) => {
    resolve(Monaco.getInstance(container, theme));
  });
}

export function setModel(language: SupportLanguage, value: string) {
  const editor = Monaco.getInstance();
  const model = {
    language,
    value,
  };
  return editor.setModel([model, model]);
}

export function cleanUp() {
  Monaco.getInstance().cleanUpEditor();
  Monaco.cleanupInstance();
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
