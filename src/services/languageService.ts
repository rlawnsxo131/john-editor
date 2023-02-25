import type { SupportLanguage } from '@/@types';

export function isSupportLanguage(value: string): value is SupportLanguage {
  return ['json', 'html', 'graphql', 'javascript', 'typescript'].includes(
    value,
  );
}
