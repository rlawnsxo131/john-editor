import type { PropsWithChildren } from 'react';

import { main } from './AppLayout.css';

export default function AppLayoutMain({ children }: PropsWithChildren) {
  return <main className={main}>{children}</main>;
}
