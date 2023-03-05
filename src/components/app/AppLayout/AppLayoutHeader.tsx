import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { anchorBaseStyle } from '@/styles';

import {
  betaTag,
  header,
  headerContent,
  headerTitleBlock,
  headerTitleLogo,
} from './AppLayout.css';

export default function AppLayoutHeader({
  children,
}: Required<PropsWithChildren>) {
  return (
    <header className={header}>
      <div className={headerContent}>
        <div className={headerTitleBlock}>
          <Link className={anchorBaseStyle} to="/">
            <h1 className={headerTitleLogo}>John Editor</h1>
          </Link>
          <div className={betaTag}>Beta</div>
        </div>
        {children}
      </div>
    </header>
  );
}
