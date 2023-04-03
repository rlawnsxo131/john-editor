export type MonacoModel = {
  value: string;
  language: string;
};

export type EditorTheme = 'light' | 'dark';

export type EditorValueUpdateObject =
  | Record<'origin', string>
  | Record<'modify', string>;

export type EditorUpdateCallback = (
  updateObject: EditorValueUpdateObject,
) => any;

export type EditorContainer<E extends HTMLElement = HTMLDivElement> = E;
