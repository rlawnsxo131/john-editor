import type { HtmlContainerElement } from '@/@types';
import { Monaco } from '@/lib/editor';
import type { SupportLanguage, Theme } from '@/models';

export function initializeEditor(
  container: HtmlContainerElement,
  theme: Theme,
) {
  return new Promise<Monaco>((resolve) => {
    resolve(Monaco.getInstance(container, theme));
  });
}

/**
 * @TODO setmodel typescript 문제 해결하기
 */
type SetModelParams = {
  origin: {
    language: SupportLanguage;
    value: string;
  };
  modify: {
    language: SupportLanguage;
    value: string;
  };
};

export function setModel(language: SupportLanguage, value: string) {
  const editor = Monaco.getInstance();
  const model = {
    language,
    value,
  };
  editor.setModel([model, model]);
  return editor;
}

export function cleanUp() {
  return Monaco.getInstance()
    .cleanUpEditor()
    .then(() => Monaco.cleanupInstance());
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
