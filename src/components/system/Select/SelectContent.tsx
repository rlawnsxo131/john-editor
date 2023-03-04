import type { PropsWithChildren } from 'react';

import { ul } from './Select.css';

type Props = Required<PropsWithChildren>;

export default function SelectContent({ children }: Props) {
  return <ul className={ul}>{children}</ul>;
}
