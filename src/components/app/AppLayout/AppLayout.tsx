import type { ReactNode } from 'react';

import { content, header } from './AppLayout.css';

type Props = {
  Header: ReactNode;
  Aside: ReactNode;
  Main: ReactNode;
};

export default function AppLayout({ Header, Aside, Main }: Props) {
  return (
    <>
      <header className={header}>{Header}</header>
      <div className={content}>
        {Aside}
        {Main}
      </div>
    </>
  );
}
