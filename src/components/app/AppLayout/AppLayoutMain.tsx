import { Outlet } from 'react-router-dom';

import { main } from './AppLayout.css';

export default function AppLayoutMain() {
  return (
    <main className={main}>
      <Outlet />
    </main>
  );
}
