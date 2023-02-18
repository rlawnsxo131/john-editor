import type { SupportLanguage } from '@/@types';

export type IndexedDBStore = Readonly<{
  name: SupportLanguage;
  keyConfig: {
    autoIncrement: boolean;
  };
}>;
