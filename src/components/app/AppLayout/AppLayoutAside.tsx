import codeIcon from '@/assets/code.svg';
import SVGIcon from '@/components/system/SVGIcon';

import { aside } from './AppLayout.css';

export default function AppLayoutAside() {
  return (
    <aside className={aside}>
      <SVGIcon src={codeIcon} />
    </aside>
  );
}
