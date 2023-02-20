import { Link } from 'react-router-dom';

import insightsIcon from '@/assets/insights.svg';
import boltIcon from '@/assets/offline_bolt.svg';

import { aside, asideLink, asideLinkIcon } from './AppLayoutAside.css';

export default function AppLayoutAside() {
  return (
    <aside className={aside}>
      <Link className={asideLink} to="/">
        <img className={asideLinkIcon} src={boltIcon} alt="home" />
      </Link>
      <Link className={asideLink} to="/info">
        <img className={asideLinkIcon} src={insightsIcon} alt="info" />
      </Link>
    </aside>
  );
}
