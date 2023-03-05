import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import type { HtmlContainerElement } from '@/@types';

// import { visullayHiddenBaseStyle } from '@/styles/base.css';
import { block } from './Select.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const SelectMain = forwardRef<HtmlContainerElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <div className={block} ref={ref} {...props}>
        {children}
        {/* @TODO 나중에 에거 처리 다시하기 */}
        {/* <select className={visullayHiddenBaseStyle}>
          <option>json</option>
        </select> */}
      </div>
    );
  },
);

export default SelectMain;
