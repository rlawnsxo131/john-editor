import { NavLink } from 'react-router-dom';

import insightsIcon from '@/assets/insights.svg';
import boltIcon from '@/assets/offline_bolt.svg';

import { aside, asideLink, asideLinkIcon } from './AppLayout.css';

export default function AppLayoutAside() {
  return (
    <aside className={aside}>
      <NavLink className={asideLink} to="/">
        <img className={asideLinkIcon} src={boltIcon} alt="home" />
      </NavLink>
      <NavLink className={asideLink} to="/info">
        <img className={asideLinkIcon} src={insightsIcon} alt="info" />
      </NavLink>
    </aside>
  );
}
