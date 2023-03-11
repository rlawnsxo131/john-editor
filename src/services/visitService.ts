import { safeLocalStorage } from '@/lib/storage';
import { IS_VISITED_KEY } from '@/models';

/**
 * @TODO 첫방문 여부로 리다이렉팅 할까말까 고민
 */
export function isVisitedUser() {
  const isVisited = safeLocalStorage.get(IS_VISITED_KEY);
  if (!isVisited) {
    safeLocalStorage.set(IS_VISITED_KEY, 'true');
  }
  return !!isVisited;
}
