import { block, contentSection } from './AppInfo.css';

export default function AppInfo() {
  return (
    <div className={block}>
      <section className={contentSection}>
        <h3>Description</h3>
        <ul>
          <li>
            언젠가 보았던 web editor 를 찾으려다 기억이 안나서 만든 application
            입니다.
          </li>
          <li>
            이 application 은 순수하게 web client 의 기술만으로 동작합니다.
          </li>
          <li>IndexedDB 기반의 트랜젝션을 보장합니다.</li>
        </ul>
      </section>
      <section className={contentSection}>
        <h3>Tech Stack</h3>
        <ul>
          <li>Yarn Berry</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>React</li>
          <li>vanilla-extract</li>
          <li>IndexedDB</li>
          <li>S3</li>
          <li>Route53</li>
          <li>CloudFront</li>
          <li>Lambda@Edge</li>
        </ul>
      </section>
    </div>
  );
}
