import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { selectTrigger } from './Select.css';

export default function SelectTrigger({
  children,
  ...props
}: Required<PropsWithChildren> & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={selectTrigger} {...props}>
      {children}
    </button>
  );
}
