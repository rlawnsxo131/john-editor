import { editor } from 'monaco-editor';

import type { HtmlContainerElement } from '@/@types';
import type { SupportLanguage, Theme } from '@/models';

type MonacoModel = {
  value: string;
  language: SupportLanguage;
};

/**
 * get all actions: editor.getSupportedActions()
 */
export default class Monaco {
  static #instance: Monaco | null;

  readonly #actions = {
    formatDocument: 'editor.action.formatDocument',
  };

  readonly #themeMap = {
    light: 'vs',
    dark: 'vs-dark',
  };

  #editor: editor.IStandaloneDiffEditor | null;

  private constructor(container: HtmlContainerElement, theme: Theme) {
    editor.onDidCreateDiffEditor((_: editor.IDiffEditor) => {
      console.log('create diff editor');
    });
    this.#editor = editor.createDiffEditor(container, {
      theme: this.#themeMap[theme],
      autoIndent: 'full',
      formatOnType: true,
      originalEditable: true,
      automaticLayout: true,
      enableSplitViewResizing: true,
    });
  }

  static getInstance(container?: HtmlContainerElement, theme?: Theme) {
    if (!this.#instance) {
      if (!container) {
        throw new Error('Manaco initialization requires container');
      } else if (!theme) {
        throw new Error('Manaco initialization requires theme value');
      }

      return (this.#instance = new this(container, theme));
    }

    return this.#instance;
  }

  static cleanupInstance() {
    this.#instance = null;
  }

  cleanUpEditor() {
    this.#editor = null;
  }

  setModel(models: [MonacoModel, MonacoModel]) {
    const [original, modified] = models.map((model) =>
      editor.createModel(model.value, model.language),
    );

    return this.#editor?.setModel({
      original,
      modified,
    });
  }

  setTheme(theme: Theme) {
    return editor.setTheme(this.#themeMap[theme]);
  }

  formatOrigin() {
    return this.#editor
      ?.getOriginalEditor()
      .getAction(this.#actions.formatDocument)
      ?.run();
  }

  formatModify() {
    return this.#editor
      ?.getModifiedEditor()
      .getAction(this.#actions.formatDocument)
      ?.run();
  }
}
