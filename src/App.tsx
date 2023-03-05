import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './components/app/AppLayout';
import Loading from './components/common/Loading';
import Editor from './components/editor/Editor';
import EditorFormatButtons from './components/editor/EditorFormatButtons';
import EditorLanguageSelect from './components/editor/EditorLanguageSelect';
import EditorMenuBox from './components/editor/EditorMenuBox';
import ThemeButton from './components/theme/ThemeButton';

const AppInfo = lazy(() => import('./components/app/AppInfo'));

/**
 * children render in AppLayout.Main
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <AppLayout.Header>
          <EditorMenuBox>
            <EditorLanguageSelect />
            <EditorFormatButtons />
          </EditorMenuBox>
          <ThemeButton />
        </AppLayout.Header>
        <AppLayout.Body>
          <AppLayout.Aside />
          <AppLayout.Main />
        </AppLayout.Body>
      </AppLayout>
    ),
    children: [
      {
        index: true,
        element: <Editor />,
      },
      {
        path: '/info',
        element: (
          <Suspense fallback={<Loading />}>
            <AppInfo />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
