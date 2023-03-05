import { safeLocalStorage } from '@/lib/storage';
import { IS_VISITED_KEY } from '@/models/visit';

export function isFirstVisit() {
  const isVisited = safeLocalStorage.get(IS_VISITED_KEY);
  if (isVisited) return;
}
