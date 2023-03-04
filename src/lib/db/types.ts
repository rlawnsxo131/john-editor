export type Schema = 'support_language';

export type SchemaName = Record<Schema, Schema>;

export type IndexedDBStore = Readonly<{
  name: Schema;
  keyConfig: {
    autoIncrement: boolean;
    keyPath: 'language';
  };
  indexConfig: {
    name: 'idx_language';
    column: 'language';
  };
}>;
