import type { PropsWithChildren } from 'react';

import { body } from './AppLayout.css';

export default function AppLayoutBody({
  children,
}: Required<PropsWithChildren>) {
  return <div className={body}>{children}</div>;
}
