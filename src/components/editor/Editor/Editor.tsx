import type { PropsWithChildren } from 'react';

import useRefEffect from '@/hooks/useRefEffect';
import { editorService, themeService } from '@/services';

import { block, editor } from './Editor.css';

export default function Editor({ children }: Required<PropsWithChildren>) {
  const containerRef = useRefEffect((div: HTMLDivElement) => {
    editorService.initializeEditor(div, themeService.get());
  }, []);

  return (
    <div className={block}>
      {children}
      <div ref={containerRef} className={editor} />
    </div>
  );
}
