import type { IndexedDBStore, SchemaNameObj } from './types';

export const IndexedDBConfig = {
  name: 'john-editor',
  version: 1,
} as const;

export const SchemaNameObject: SchemaNameObj = {
  support_language: 'support_language',
};

export const IndexedDBSchemaConfig: Readonly<IndexedDBStore[]> = [
  {
    name: 'support_language',
    keyConfig: {
      autoIncrement: true,
      keyPath: 'language',
    },
    indexConfig: {
      name: 'idx_language',
      column: 'language',
    },
  },
] as const;
