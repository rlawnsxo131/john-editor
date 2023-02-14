import type { SupportLanguage } from '@/@types';

export const IndexedDBConfig = {
  name: 'john-editor',
  version: 1,
} as const;

export type IndexedDBStore = Readonly<{
  name: SupportLanguage;
  keyConfig: {
    autoIncrement: boolean;
  };
}>;

export const IndexedDBSchemaConfig: Readonly<IndexedDBStore[]> = [
  {
    name: 'json',
    keyConfig: {
      autoIncrement: true,
    },
  },
  {
    name: 'html',
    keyConfig: {
      autoIncrement: true,
    },
  },
] as const;
