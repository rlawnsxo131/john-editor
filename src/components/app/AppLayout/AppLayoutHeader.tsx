import { header, headerContent, headerTitleLogo } from './AppLayout.css';

export default function AppLayoutHeader() {
  return (
    <header className={header}>
      <div className={headerContent}>
        <h1 className={headerTitleLogo}>John Editor</h1>
      </div>
    </header>
  );
}
