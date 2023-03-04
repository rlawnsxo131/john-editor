import type { ComponentType } from 'react';
import { Suspense } from 'react';

export default function withSuspense<
  Props extends Record<string, unknown> = Record<string, never>,
>(Component: ComponentType<Props>) {
  const Wrapped = (props: Props) => (
    <Suspense fallback={<div>loading</div>}>
      <Component {...props} />
    </Suspense>
  );

  return Wrapped;
}
