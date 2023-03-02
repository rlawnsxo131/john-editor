import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { anchorBaseStyle } from '@/styles/base.css';

import { header, headerContent, headerTitleLogo } from './AppLayout.css';

export default function AppLayoutHeader({
  children,
}: Required<PropsWithChildren>) {
  return (
    <header className={header}>
      <div className={headerContent}>
        <Link className={anchorBaseStyle} to="/">
          <h1 className={headerTitleLogo}>John Editor</h1>
        </Link>
        {children}
      </div>
    </header>
  );
}
