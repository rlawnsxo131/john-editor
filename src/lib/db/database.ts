import { SUPPORT_LANGUAGES, SUPPORT_LAUNGUAGE_INITIAL_VALUE } from '@/models';

import {
  INDEXED_DB_CONFIG,
  INDEXED_DB_SCHEMA_CONFIG,
  SCHEMA_NAME_OBJECT,
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
      INDEXED_DB_CONFIG.name,
      INDEXED_DB_CONFIG.version,
    );

    request.onerror = () => {
      reject(new Error(`indexedDB open failed: ${request.error}`));
    };

    request.onsuccess = () => {
      const db = request.result;
      db.onversionchange = () => {
        db.close();
        alert('새로운 버전의 저장소가 필요합니다. 페이지를 새로고침해 주세요.');
      };
      resolve(db);
    };

    request.onblocked = () =>
      reject(new Error(`indexedDB trigger onblocked event: ${request.error}`));

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
      const names = INDEXED_DB_SCHEMA_CONFIG.reduce<string[]>((acc, config) => {
        const store = db.createObjectStore(config.name, {
          ...config.keyConfig,
        });
        store.createIndex(config.indexConfig.name, config.indexConfig.column);
        acc.push(store.name);
        return acc;
      }, []);
      console.log('create tables:', names.join());
      console.log('current version:', db.version);
    }
  }).then((db) => db.close());
}

export function initializeSupportLanguageRecords() {
  return new Promise<IDBValidKey[]>((resolve, reject) => {
    openDatabase().then((db) => {
      const tx = db.transaction(
        SCHEMA_NAME_OBJECT.support_language,
        'readwrite',
      );
      const store = tx.objectStore(SCHEMA_NAME_OBJECT.support_language);
      const results: IDBValidKey[] = [];

      SUPPORT_LANGUAGES.forEach((language) => {
        const request = store.put({
          language,
          origin: SUPPORT_LAUNGUAGE_INITIAL_VALUE[language].origin,
          modify: SUPPORT_LAUNGUAGE_INITIAL_VALUE[language].modify,
        });

        request.onsuccess = () => results.push(request.result);
        request.onerror = () => reject(request.error);
      });

      resolve(results);
    });
  });
}
