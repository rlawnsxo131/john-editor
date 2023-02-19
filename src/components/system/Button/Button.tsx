import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { button } from './Button.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variants?: 'primary' | 'ghost';
};

export default function Button({
  children,
  variants = 'primary',
  ...props
}: Props) {
  return (
    <button className={button[variants]} {...props}>
      {children}
    </button>
  );
}
