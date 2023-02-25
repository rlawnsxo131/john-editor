import type { PropsWithChildren } from 'react';

import { ulBaseStyle } from '@/styles/base.css';

type Props = Required<PropsWithChildren>;

export default function SelectContent({ children }: Props) {
  return <ul className={ulBaseStyle}>{children}</ul>;
}
