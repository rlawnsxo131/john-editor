import { openDatabase } from './database';
import type { IndexedDBStore } from './types';

export function add<T>(
  storeName: IndexedDBStore['name'],
  data: {
    value: T;
    key?: IDBValidKey;
  },
  txOptions?: IDBTransactionOptions,
) {
  return new Promise<IDBValidKey>((resolve, reject) => {
    openDatabase().then((db) => {
      const tx = db.transaction(storeName, 'readwrite', { ...txOptions });
      const store = tx.objectStore(storeName);
      const request = store.add(data.value, data.key);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      tx.oncomplete = () => db.close();
    });
  });
}

export function getByKey<T>(
  storeName: IndexedDBStore['name'],
  key: IDBValidKey,
) {
  return new Promise<T>((resolve, reject) => {
    openDatabase().then((db) => {
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.get(key);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      tx.oncomplete = () => db.close();
    });
  });
}

export function put(
  storeName: IndexedDBStore['name'],
  value: Record<string, string>,
) {
  return new Promise<IDBValidKey>((resolve, reject) => {
    openDatabase().then((db) => {
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.put({ ...value });

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
}

export function getKey(storeName: IndexedDBStore['name'], key: IDBValidKey) {
  return new Promise<IDBValidKey | undefined>((resolve, reject) => {
    openDatabase().then((db) => {
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.getKey(key);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      tx.oncomplete = () => db.close();
    });
  });
}
