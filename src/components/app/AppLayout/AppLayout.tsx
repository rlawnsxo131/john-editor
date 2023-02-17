import type { PropsWithChildren } from 'react';

import AppLayoutAside from './AppLayoutAside';
import AppLayoutBody from './AppLayoutBody';
import AppLayoutHeader from './AppLayoutHeader';
import AppLayoutMain from './AppLayoutMain';

/**
 * App.tsx should be referenced
 */
const AppLayout = Object.assign(
  ({ children }: Required<PropsWithChildren>) => <>{children}</>,
  {
    Header: AppLayoutHeader,
    Body: AppLayoutBody,
    Main: AppLayoutMain,
    Aside: AppLayoutAside,
  },
);

export default AppLayout;
