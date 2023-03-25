import useRefEffect from '@/hooks/useRefEffect';
import { editorService, languageService, themeService } from '@/services';

import { block, editor } from './Editor.css';

function Editor() {
  const containerRef = useRefEffect((div: HTMLDivElement) => {
    editorService
      .initializeEditor(div, themeService.get())
      .then((_) => languageService.getRecentLanguage())
      .then((recentLanguage) => languageService.getByKey(recentLanguage))
      .then((data) =>
        editorService.setModel(data.language, {
          origin: data.origin,
          modify: data.modify,
        }),
      )
      /**
       * @TODO 업데이트 기능 추가하기
       */
      .then((monaco) => monaco.setUpdateCallback())
      .then((monaco) => monaco.updateTabSize(2))
      .catch((reason) => console.error(reason));
  }, []);

  return (
    <div className={block}>
      <div ref={containerRef} className={editor} />
    </div>
  );
}

export default Editor;
