import { Link } from 'react-router-dom';

import insightsIcon from '@/assets/insights.svg';
import boltIcon from '@/assets/offline_bolt.svg';
import SVGIcon from '@/components/system/SVGIcon';

import { aside, asideLink } from './AppLayout.css';

export default function AppLayoutAside() {
  return (
    <aside className={aside}>
      <Link className={asideLink} to="/">
        <SVGIcon src={boltIcon} />
      </Link>
      <Link className={asideLink} to="/info">
        <SVGIcon src={insightsIcon} />
      </Link>
    </aside>
  );
}
