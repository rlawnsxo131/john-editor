import type { HTMLAttributes, ReactNode } from 'react';

import { ul } from './Select.css';

type Props = HTMLAttributes<HTMLUListElement> & {
  children: ReactNode;
};

export default function SelectContent({ children, ...props }: Props) {
  return (
    <ul className={ul} {...props}>
      {children}
    </ul>
  );
}
