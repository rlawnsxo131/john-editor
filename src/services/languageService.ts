import type { SupportLanguage } from '@/models';
import { SUPPORT_LANGUAGES } from '@/models';

export function isSupportLanguage(
  value: SupportLanguage,
): value is SupportLanguage {
  return SUPPORT_LANGUAGES.includes(value);
}
