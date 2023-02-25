import type { PropsWithChildren } from 'react';

import { visullayHiddenBaseStyle } from '@/styles/base.css';

import { block } from './Select.css';

export default function SelectMain({ children }: Required<PropsWithChildren>) {
  return (
    <div className={block}>
      {children}
      <select className={visullayHiddenBaseStyle}>
        <option>json</option>
      </select>
    </div>
  );
}
