import { safeLocalStorage } from '@/lib/storage';
import { IS_VISITED_KEY } from '@/models';

export function isVisitedUser() {
  return new Promise((resolve) => {
    const isVisited = safeLocalStorage.get(IS_VISITED_KEY);
    if (!isVisited) {
      safeLocalStorage.set(IS_VISITED_KEY, 'true');
    }
    resolve(!!isVisited);
  });
}
