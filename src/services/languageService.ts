import type { SupportLanguage } from '@/models/language';
import { SUPPORT_LANGUAGES } from '@/models/language';

export function isSupportLanguage(
  value: SupportLanguage,
): value is SupportLanguage {
  return SUPPORT_LANGUAGES.includes(value);
}
