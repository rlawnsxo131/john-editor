import { useCallback, useEffect, useRef } from 'react';

export default function usePreservedCallback<
  Callback extends (...args: any[]) => any,
>(callback: Callback): Callback {
  const callbackRef = useRef<Callback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    (...args: any[]) => {
      return callbackRef.current(...args);
    },
    [callbackRef],
  ) as Callback;
}
