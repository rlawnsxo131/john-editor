import debounce from 'lodash.debounce';

import useRefEffect from '@/hooks/useRefEffect';
import type { EditorValueUpdateObject } from '@/lib/editor';
import { editorService, languageService, themeService } from '@/services';

import { block, editor } from './Editor.css';

export default function Editor() {
  const containerRef = useRefEffect((div: HTMLDivElement) => {
    const recentLanguage = languageService.getRecentLanguage();
    const updateCallback = debounce(
      (updateObject: EditorValueUpdateObject) =>
        languageService.putLanguageValue(recentLanguage, updateObject),
      50,
    );

    editorService
      .initializeEditor(div, themeService.get())
      .then((_) => languageService.getByKey(recentLanguage))
      .then((data) =>
        editorService.setModel(data.language, {
          origin: data.origin,
          modify: data.modify,
        }),
      )
      .then((monaco) => monaco.setUpdateCallback(updateCallback))
      .then((monaco) => monaco.updateTabSize(2))
      .catch((reason) => console.error(reason));
  }, []);

  return (
    <div className={block}>
      <div ref={containerRef} className={editor} />
    </div>
  );
}
