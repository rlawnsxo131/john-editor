import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppDataInitializer from './components/app/AppDataInitializer';
import AppLayout from './components/app/AppLayout';
import Loading from './components/common/Loading';
import EditorFormatButtons from './components/editor/EditorFormatButtons';
import EditorLanguageSelect from './components/editor/EditorLanguageSelect';
import EditorMenuBox from './components/editor/EditorMenuBox';
import ThemeButton from './components/theme/ThemeButton';

const AppInfo = lazy(() => import('./components/app/AppInfo'));
const Editor = lazy(() => import('./components/editor/Editor'));

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
          <AppDataInitializer>
            <AppLayout.Main />
          </AppDataInitializer>
        </AppLayout.Body>
      </AppLayout>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Editor />
          </Suspense>
        ),
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
