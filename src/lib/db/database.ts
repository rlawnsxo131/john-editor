import { IndexDBSchemaConfig, IndexedDBConfig } from './config';

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
      console.log('initialize object tables');
      IndexDBSchemaConfig.forEach((config) => {
        db.createObjectStore(config.name, { ...config.keyConfig });
      });
    }
  }).then((db) => db.close());
}
