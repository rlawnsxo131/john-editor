import { Suspense, useMemo } from 'react';
import { Await } from 'react-router-dom';

import Loading from '@/components/common/Loading';
import useRefEffect from '@/hooks/useRefEffect';
import { initializeDatabase, initializeSupportLanguageRecords } from '@/lib/db';
import { editorService, languageService, themeService } from '@/services';

import { block, editor } from './Editor.css';

function Editor() {
  const initialRecords = useMemo(
    () => initializeDatabase().then((_) => initializeSupportLanguageRecords()),
    [],
  );

  const containerRef = useRefEffect((div: HTMLDivElement) => {
    editorService
      .initializeEditor(div, themeService.get())
      .then((_) => languageService.getRecentLanguage())
      .then((recentLanguage) => languageService.getByKey(recentLanguage))
      .then((data) => editorService.setModel(data.language, data.value))
      .then((editor) => editor.updateTabSize(2))
      .catch((reason) => console.error(reason));

    return () => editorService.cleanUp();
  }, []);

  return (
    <div className={block}>
      <Suspense fallback={<Loading />}>
        <Await resolve={initialRecords} errorElement={<div>error</div>}>
          {() => <div ref={containerRef} className={editor} />}
        </Await>
      </Suspense>
    </div>
  );
}

export default Editor;
