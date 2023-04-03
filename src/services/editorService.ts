import type { HtmlContainerElement } from '@/@types';
import type { SupportLanguage, Theme } from '@/domain';
import { Monaco } from '@/lib/editor';

export function initializeEditor(
  container: HtmlContainerElement,
  theme: Theme,
) {
  return new Promise<Monaco>((resolve) => {
    const instance = Monaco.getInstance(theme);
    instance.appendEditorFor(container);
    resolve(instance);
  });
}

export function isExistsEditor() {
  return Monaco.isExistsInstance();
}

/**
 * @TODO setmodel typescript 문제 해결하기
 */
export function setModel(
  language: SupportLanguage,
  values: {
    origin: string;
    modify: string;
  },
) {
  const editor = Monaco.getInstance();
  editor.setModel([
    {
      language,
      value: values.origin,
    },
    {
      language,
      value: values.modify,
    },
  ]);
  return editor;
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
