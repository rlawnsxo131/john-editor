import { editor } from 'monaco-editor';

import type { SupportLanguage } from '@/@types';

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

  private constructor(div: HTMLDivElement) {
    this.#editor = editor.createDiffEditor(div, {
      theme: 'vs-dark',
      autoIndent: 'full',
      formatOnType: true,
      originalEditable: true,
      automaticLayout: true,
      enableSplitViewResizing: true,
    });
  }

  public static getInstance(div?: HTMLDivElement) {
    if (!this.#instance) {
      editor.onDidCreateDiffEditor((_: editor.IDiffEditor) => {
        console.log('create diff editor');
      });

      if (!div) {
        throw new Error('Manaco initialization requires div');
      }
      return (this.#instance = new this(div));
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
