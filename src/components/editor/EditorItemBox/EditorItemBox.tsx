import type { PropsWithChildren } from 'react';

import { block } from './EditorItemBox.css';

export default function EditorItemBox({
  children,
}: Required<PropsWithChildren>) {
  return <div className={block}>{children}</div>;
}
