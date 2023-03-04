import { repository } from '@/lib/db';
import { safeLocalStorage } from '@/lib/storage';
import type { LanguageRecord, SupportLanguage } from '@/models';
import { LANGUAGE_KEY, LANGUAGE_VALUE } from '@/models';
import { SUPPORT_LANGUAGES } from '@/models';

export function isSupportLanguage(
  value: SupportLanguage,
): value is SupportLanguage {
  return SUPPORT_LANGUAGES.includes(value);
}

/**
 * @TODO 최근 다룬 언어 저장하는 기능도 추가하기
 */
export function getRecentLanguage() {
  const storageValue = safeLocalStorage.get(LANGUAGE_KEY) as SupportLanguage;
  return storageValue ?? (LANGUAGE_VALUE.json as SupportLanguage);
}

export function getByKey(key: SupportLanguage) {
  return repository.getByKey<LanguageRecord>('support_language', key);
}
