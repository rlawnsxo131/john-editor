import type { IndexedDBStore, SchemaName } from './types';

export const INDEXED_DB_CONFIG = {
  name: 'john-editor',
  version: 1,
} as const;

export const SCHEMA_NAME_OBJECT: SchemaName = {
  support_language: 'support_language',
};

export const INDEXED_DB_SCHEMA_CONFIG: Readonly<IndexedDBStore[]> = [
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
