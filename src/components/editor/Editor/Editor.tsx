import { Suspense } from 'react';
import { Await, Navigate } from 'react-router-dom';

import Loading from '@/components/common/Loading';
import useRefEffect from '@/hooks/useRefEffect';
import { initializeDatabase, initializeSupportLanguageRecords } from '@/lib/db';
import {
  editorService,
  languageService,
  themeService,
  visitService,
} from '@/services';

import { block, editor } from './Editor.css';

function Editor() {
  const initialData = initializeDatabase()
    .then((_) => initializeSupportLanguageRecords())
    .then((_) => visitService.isVisitedUser());

  const containerRef = useRefEffect((div: HTMLDivElement) => {
    editorService
      .initializeEditor(div, themeService.get())
      .then((_) => languageService.getRecentLanguage())
      .then((recentLanguage) => languageService.getByKey(recentLanguage))
      .then((data) => {
        return editorService.setModel(data.language, {
          origin: data.origin,
          modify: data.modify,
        });
      })
      .then((editor) => editor.updateTabSize(2))
      .catch((reason) => console.error(reason));

    return () => editorService.cleanUp();
  }, []);

  return (
    <div className={block}>
      <Suspense fallback={<Loading />}>
        <Await
          resolve={initialData}
          errorElement={<div>error</div>}
          children={(isVisitedUser: boolean) => {
            if (!isVisitedUser) return <Navigate replace to="/info" />;
            return <div ref={containerRef} className={editor} />;
          }}
        />
      </Suspense>
    </div>
  );
}

export default Editor;
