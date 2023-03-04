import type { HTMLAttributes, ReactNode } from 'react';

import { li } from './Select.css';

type Props = Omit<HTMLAttributes<HTMLLIElement>, 'className'> & {
  children: ReactNode;
};

export default function SelectOption({ children, ...props }: Props) {
  return (
    <li className={li} {...props}>
      {children}
    </li>
  );
}
