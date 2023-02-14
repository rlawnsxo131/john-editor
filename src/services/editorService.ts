import { Monaco } from '@/lib/editor';

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

export function formatOrigin() {
  return Monaco.getInstance().formatOrigin();
}

export function formatModify() {
  return Monaco.getInstance().formatModify();
}
