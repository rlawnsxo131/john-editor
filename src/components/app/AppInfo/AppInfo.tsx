import { block, contentSection } from './AppInfo.css';

export default function AppInfo() {
  return (
    <div className={block}>
      <section className={contentSection}>
        <h3>Description</h3>
        <p>
          언젠가 보았던 web editor 를 찾으려다 기억이 안나서 만든 application
          입니다.
          {'\n'} 이 application 은 순수하게 web client 의 기술만으로 동작하고,
          IndexedDB 기반의 트랜젝션을 보장합니다.
        </p>
      </section>
      <section className={contentSection}>
        <h3>Tech Stack</h3>
        <p>
          Yarn Berry, TypeScript, Vite, React, vanilla-extract, IndexedDB, S3,
          Route53, CloudFront, Lambda@Edge
        </p>
      </section>
    </div>
  );
}
