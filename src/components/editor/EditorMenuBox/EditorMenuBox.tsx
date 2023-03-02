import type { PropsWithChildren } from 'react';

import { block } from './EditorMenuBox.css';

export default function EditorMenuBox({
  children,
}: Required<PropsWithChildren>) {
  return <div className={block}>{children}</div>;
}
