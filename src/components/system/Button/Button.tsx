import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  Required<PropsWithChildren<{}>>;

export default function Button({ children, ...props }: Props) {
  return <button {...props}>{children}</button>;
}
