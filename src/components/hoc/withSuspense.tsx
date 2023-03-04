import type { ComponentType } from 'react';
import { Suspense } from 'react';

/**
 * @TODO react router 에서 제공하는 <Await /> 이랑 쓰는게 나을지 직접 만들지 고민해보기
 */
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
