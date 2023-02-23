import { visullayHiddenBaseStyle } from '@/styles/base.css';

import { block } from './Select.css';

export default function Select() {
  return (
    <div className={block}>
      <button>click</button>``
      <select className={visullayHiddenBaseStyle}>
        <option>json</option>
      </select>
    </div>
  );
}
