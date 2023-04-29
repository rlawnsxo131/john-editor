import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

import { block } from './EditorMenuBox.css';

export default function EditorMenuBox({
  children,
}: Required<PropsWithChildren>) {
  const { pathname } = useLocation();

  if (pathname !== '/') return null;

  return <div className={block}>{children}</div>;
}
