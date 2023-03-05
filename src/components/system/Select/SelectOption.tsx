import type { HTMLAttributes, ReactNode } from 'react';

import { li } from './Select.css';

type Props = HTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
};

export default function SelectOption({ children, ...props }: Props) {
  return (
    <li className={li} {...props}>
      {children}
    </li>
  );
}
