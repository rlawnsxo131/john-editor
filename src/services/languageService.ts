import { repository } from '@/lib/db';
import { SCHEMA_NAME_OBJECT } from '@/lib/db';
import type { LanguageRecord, SupportLanguage } from '@/lib/db/models';
import { LANGUAGE_VALUE, RECENT_LANGUAGE_KEY } from '@/lib/db/models';
import { SUPPORT_LANGUAGES } from '@/lib/db/models';
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

export function putLanguageValue(newRecord: LanguageRecord) {
  return repository.put(SCHEMA_NAME_OBJECT.support_language, newRecord);
}
