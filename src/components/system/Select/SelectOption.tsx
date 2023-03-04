import type { PropsWithChildren } from 'react';

import { li } from './Select.css';

export default function SelectOption({
  children,
}: Required<PropsWithChildren>) {
  return <li className={li}>{children}</li>;
}
