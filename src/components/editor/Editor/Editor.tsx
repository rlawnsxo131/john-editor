import type { PropsWithChildren } from 'react';

import useRefEffect from '@/hooks/useRefEffect';
import { editorActions } from '@/lib/editor';

import { block, editor } from './Editor.css';

export default function Editor({ children }: PropsWithChildren) {
  const containerRef = useRefEffect((div: HTMLDivElement) => {
    editorActions.initializeEditor(div);
  }, []);

  return (
    <div className={block}>
      {children}
      <div ref={containerRef} className={editor} />
    </div>
  );
}
