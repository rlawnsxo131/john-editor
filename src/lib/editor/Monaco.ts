import { editor } from 'monaco-editor';

import type { SupportLanguage, Theme } from '@/@types';

type MonacoModel = {
  value: string;
  language: SupportLanguage;
};

export default class Monaco {
  static #instance: Monaco;

  readonly #actions = {
    formatDocument: 'editor.action.formatDocument',
  };

  #editor: editor.IStandaloneDiffEditor;

  private constructor(div: HTMLDivElement, theme?: Theme) {
    this.#editor = editor.createDiffEditor(div, {
      theme: this.#getTheme(theme),
      autoIndent: 'full',
      formatOnType: true,
      originalEditable: true,
      automaticLayout: true,
      enableSplitViewResizing: true,
    });
  }

  #getTheme(theme?: Theme) {
    return theme === 'dark' ? 'vs-dark' : 'vs';
  }

  public static getInstance(div?: HTMLDivElement, theme?: Theme) {
    if (!this.#instance) {
      editor.onDidCreateDiffEditor((_: editor.IDiffEditor) => {
        console.log('create diff editor');
      });

      if (!div) {
        throw new Error('Manaco initialization requires div');
      } else if (!theme) {
        throw new Error('Manaco initialization requires theme value');
      }

      return (this.#instance = new this(div, theme));
    }

    return this.#instance;
  }

  public setModel(models: [MonacoModel, MonacoModel]) {
    const [original, modified] = models.map((model) =>
      editor.createModel(model.value, model.language),
    );

    return this.#editor.setModel({
      original,
      modified,
    });
  }

  public setTheme(theme: Theme) {
    return editor.setTheme(this.#getTheme(theme));
  }

  public formatOrigin() {
    return this.#editor
      .getOriginalEditor()
      .getAction(this.#actions.formatDocument)
      ?.run();
  }

  public formatModify() {
    return this.#editor
      .getModifiedEditor()
      .getAction(this.#actions.formatDocument)
      ?.run();
  }
}
