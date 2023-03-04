import {
  SUPPORT_LANGUAGES,
  SUPPORT_LAUNGUAGE_INITIAL_VALUE,
} from '@/models/language';

import {
  IndexedDBConfig,
  IndexedDBSchemaConfig,
  SchemaNameObject,
} from './config';

type UpgradeCallback = (
  event: IDBVersionChangeEvent,
  db: IDBDatabase,
) => Promise<void> | void;

/**
 * onupgradeneeded -> onsuccess
 * onversionchange 가 정상적으로 처리되었다면, onblocked 가 트리거 되지 않아야 한다.
 */
export function openDatabase(upgradeCallback?: UpgradeCallback) {
  return new Promise<IDBDatabase>((resolve, reject) => {
    if (!indexedDB) reject(new Error('indexedDB is not supported'));
    const request = indexedDB.open(
      IndexedDBConfig.name,
      IndexedDBConfig.version,
    );

    request.onerror = () => {
      reject(new Error(`indexedDB open failed: ${request.error}`));
    };

    request.onsuccess = () => {
      console.log('indexedDB version:', request.result.version);
      const db = request.result;
      db.onversionchange = () => {
        db.close();
        alert('새로운 버전의 저장소가 필요합니다. 페이지를 새로고침해 주세요.');
      };
      resolve(db);
    };

    request.onblocked = () => {
      reject(new Error(`indexedDB trigger onblocked event: ${request.error}`));
    };

    if (typeof upgradeCallback === 'function') {
      request.onupgradeneeded = (event) => {
        console.log('onupgradeneeded and current version:', event.oldVersion);
        upgradeCallback(event, request.result);
      };
    }
  });
}

export function initializeDatabase() {
  return openDatabase((event, db) => {
    if (event.oldVersion === 0) {
      const names = IndexedDBSchemaConfig.reduce<string[]>((acc, config) => {
        const store = db.createObjectStore(config.name, {
          ...config.keyConfig,
        });
        store.createIndex(config.indexConfig.name, config.indexConfig.column);
        acc.push(store.name);
        return acc;
      }, []);
      console.log('create tables:', names.join());
    }
  }).then((db) => db.close());
}

export function addInitializeLanguages() {
  return new Promise((resolve, reject) => {
    openDatabase().then((db) => {
      const tx = db.transaction(SchemaNameObject.support_language, 'readwrite');
      const store = tx.objectStore(SchemaNameObject.support_language);
      const results: IDBValidKey[] = [];

      SUPPORT_LANGUAGES.forEach((language) => {
        const request = store.put({
          language,
          value: SUPPORT_LAUNGUAGE_INITIAL_VALUE[language],
        });

        request.onsuccess = () => results.push(request.result);
        request.onerror = () => reject(request.error);
      });

      resolve(results);
    });
  });
}
