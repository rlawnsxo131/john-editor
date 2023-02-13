import Monaco from './Monaco';

export function initializeEditor(div: HTMLDivElement) {
  const editor = Monaco.getInstance(div);

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
