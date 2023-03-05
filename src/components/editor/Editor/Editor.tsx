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
    .then(() => initializeSupportLanguageRecords())
    .then((_) => visitService.isVisitedUser());

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
      .then((editor) => editor.updateTabSize(2))
      /**
       * @TODO 업데이트 기능 추가하기
       */
      .then((editor) => editor.setUpdateCallback())
      .catch((reason) => console.error(reason));

    return () => editorService.cleanUp();
  }, []);

  return (
    <div className={block}>
      {/* @TODO ErrorBoundary 작성후 errorElement 대체하기 */}
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
