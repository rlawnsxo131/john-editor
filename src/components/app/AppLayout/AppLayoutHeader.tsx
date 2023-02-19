import type { PropsWithChildren } from 'react';

import { header, headerContent, headerTitleLogo } from './AppLayout.css';

export default function AppLayoutHeader({
  children,
}: Required<PropsWithChildren>) {
  return (
    <header className={header}>
      <div className={headerContent}>
        <h1 className={headerTitleLogo}>John Editor</h1>
        {children}
      </div>
    </header>
  );
}
