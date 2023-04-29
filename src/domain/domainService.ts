import { repository, SCHEMA_NAME_OBJECT } from '@/db';

import { SUPPORT_LANGUAGES, SUPPORT_LAUNGUAGE_INITIAL_VALUE } from './models';

export async function initializeSupportLanguageRecords() {
  const result: IDBValidKey[] = [];

  for (const language of SUPPORT_LANGUAGES) {
    const exists = await repository.getByKey(
      SCHEMA_NAME_OBJECT.support_language,
      language,
    );
    if (!exists) {
      const resKey = await repository.put(SCHEMA_NAME_OBJECT.support_language, {
        language,
        origin: SUPPORT_LAUNGUAGE_INITIAL_VALUE[language].origin,
        modify: SUPPORT_LAUNGUAGE_INITIAL_VALUE[language].modify,
      });
      result.push(resKey);
    }
  }

  return result;
}
