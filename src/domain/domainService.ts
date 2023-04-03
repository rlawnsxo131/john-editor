import { openDatabase, SCHEMA_NAME_OBJECT } from '@/db';

import { SUPPORT_LANGUAGES, SUPPORT_LAUNGUAGE_INITIAL_VALUE } from './models';

export function initializeSupportLanguageRecords() {
  return new Promise<IDBValidKey[]>((resolve, reject) => {
    openDatabase().then((db) => {
      const tx = db.transaction(
        SCHEMA_NAME_OBJECT.support_language,
        'readwrite',
      );
      const store = tx.objectStore(SCHEMA_NAME_OBJECT.support_language);
      const result: IDBValidKey[] = [];

      SUPPORT_LANGUAGES.forEach((language) => {
        const request = store.put({
          language,
          origin: SUPPORT_LAUNGUAGE_INITIAL_VALUE[language].origin,
          modify: SUPPORT_LAUNGUAGE_INITIAL_VALUE[language].modify,
        });

        request.onsuccess = () => result.push(request.result);
        request.onerror = () => reject(request.error);
      });

      resolve(result);
    });
  });
}
