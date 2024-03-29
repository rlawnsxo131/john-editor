import { repository } from '@/db';
import { SCHEMA_NAME_OBJECT } from '@/db';
import type { LanguageRecord, SupportLanguage } from '@/domain';
import { LANGUAGE_VALUE, RECENT_LANGUAGE_KEY } from '@/domain';
import { SUPPORT_LANGUAGES } from '@/domain';
import type { EditorValueUpdateObject } from '@/lib/editor';
import { safeLocalStorage } from '@/lib/storage';

export function isSupportLanguage(
  value: SupportLanguage,
): value is SupportLanguage {
  return SUPPORT_LANGUAGES.includes(value);
}

export function getRecentLanguage() {
  const storageValue = safeLocalStorage.get(
    RECENT_LANGUAGE_KEY,
  ) as SupportLanguage;
  return storageValue ?? (LANGUAGE_VALUE.json as SupportLanguage);
}

export function setRecentLanguage(language: SupportLanguage) {
  return safeLocalStorage.set(RECENT_LANGUAGE_KEY, language);
}

export function getByKey(key: SupportLanguage) {
  return repository.getByKey<LanguageRecord>(
    SCHEMA_NAME_OBJECT.support_language,
    key,
  );
}

export function putLanguageValue(
  recentLanguage: SupportLanguage,
  newRecordValue: EditorValueUpdateObject,
) {
  return repository
    .getByKey<LanguageRecord>(
      SCHEMA_NAME_OBJECT.support_language,
      recentLanguage,
    )
    .then((prevRecord) =>
      repository.put(SCHEMA_NAME_OBJECT.support_language, {
        ...prevRecord,
        ...newRecordValue,
      }),
    );
}
