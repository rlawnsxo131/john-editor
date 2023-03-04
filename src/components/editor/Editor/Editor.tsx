import useRefEffect from '@/hooks/useRefEffect';
import { editorService, languageService, themeService } from '@/services';

import { block, editor } from './Editor.css';

export default function Editor() {
  const containerRef = useRefEffect((div: HTMLDivElement) => {
    editorService
      .initializeEditor(div, themeService.get())
      .then((_) => languageService.getRecentLanguage())
      .then((recentLanguage) =>
        languageService.getLanguageValueByKey(recentLanguage),
      )
      .then((data) => editorService.setModel(data.language, data.value))
      .catch((reason) => {
        console.error(reason);
      });
    return () => editorService.cleanUp();
  }, []);

  return (
    <div className={block}>
      <div ref={containerRef} className={editor} />
    </div>
  );
}
