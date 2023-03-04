import type { PropsWithChildren } from 'react';

export default function SelectOption({
  children,
}: Required<PropsWithChildren>) {
  return <div>{children}</div>;
}
