import { editor } from 'monaco-editor';

import type { HtmlContainerElement } from '@/@types';
import type { SupportLanguage, Theme } from '@/models';

type MonacoModel = {
  value: string;
  language: SupportLanguage;
};

/**
 * @description get all actions: editor.getSupportedActions()
 */
export default class Monaco {
  readonly #actions = {
    formatDocument: 'editor.action.formatDocument',
  };

  readonly #themeMap = {
    light: 'vs',
    dark: 'vs-dark',
  };

  static #instance: Monaco | null;

  #editorContainer: HtmlContainerElement | null = null;
  #editor: editor.IStandaloneDiffEditor | null = null;

  private constructor(theme: Theme) {
    editor.onDidCreateDiffEditor((_: editor.IDiffEditor) => {
      console.log('create diff editor');
    });

    this.#onceCreateEditor(theme);
  }

  static getInstance(theme?: Theme) {
    if (!this.#instance) {
      if (!theme) throw new Error('Manaco initialization requires theme value');
      return (this.#instance = new this(theme));
    }
    return this.#instance;
  }

  static isExistsInstance() {
    return !!this.#instance;
  }

  /**
   * @description
   * monaco 생성시 HTMLElement 가 필요한데, react component 가 unmount 되었다가 다시 붙을때,
   * 같은 HTMLElement 참조를 보지 않기때문에 미리 고정된 HTMLElement 를 만들어 놓고,
   * 불필요한 monaco 의 재생성을 회피합니다.
   */
  #onceCreateEditor(theme: Theme) {
    if (!this.#editorContainer) {
      const editorContainer = document.createElement('div');
      editorContainer.style.flex = '1';
      editorContainer.style.width = '100%';
      editorContainer.style.height = '100%';
      this.#editorContainer = editorContainer;

      this.#editor = editor.createDiffEditor(this.#editorContainer, {
        theme: this.#themeMap[theme],
        autoIndent: 'full',
        formatOnType: true,
        originalEditable: true,
        automaticLayout: true,
        enableSplitViewResizing: true,
      });
    }

    return this.#editorContainer;
  }

  appendEditorFor(container: HtmlContainerElement) {
    if (!this.#editorContainer)
      throw new Error('Manaco appendEditor method requires container');

    return container.appendChild(this.#editorContainer);
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

  updateTabSize(tabSize: number) {
    this.#editor?.getModel()?.original.updateOptions({ tabSize });
    this.#editor?.getModel()?.modified.updateOptions({ tabSize });

    return this;
  }

  /**
   * @TODO 업데이트 기능 추가하기
   * origin 과 modify 에 이벤트가 비동기로 발생하는데,
   * 이 두 이벤트를 묶을 방법이 있나 고민해보자
   */
  setUpdateCallback() {
    const models = this.#editor?.getModel();
    const origin = models?.original;
    const modify = models?.modified;

    origin?.onDidChangeContent((_) => {
      console.log(origin.getValue());
    });
    modify?.onDidChangeContent((_) => {
      console.log(modify.getValue());
    });

    return this;
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
