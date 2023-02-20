import useRefEffect from '@/hooks/useRefEffect';
import { editorService, themeService } from '@/services';

import { block, editor } from './Editor.css';

export default function Editor() {
  const containerRef = useRefEffect((div: HTMLDivElement) => {
    editorService.initializeEditor(div, themeService.get());
  }, []);

  return (
    <div className={block}>
      <div ref={containerRef} className={editor} />
    </div>
  );
}
