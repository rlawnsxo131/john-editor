import AppLayoutAside from './AppLayoutAside';
import AppLayoutBody from './AppLayoutBody';
import AppLayoutContainer from './AppLayoutContainer';
import AppLayoutHeader from './AppLayoutHeader';
import AppLayoutMain from './AppLayoutMain';

/**
 * App.tsx should be referenced
 */
const AppLayout = Object.assign(AppLayoutContainer, {
  Header: AppLayoutHeader,
  Body: AppLayoutBody,
  Main: AppLayoutMain,
  Aside: AppLayoutAside,
});

export default AppLayout;
