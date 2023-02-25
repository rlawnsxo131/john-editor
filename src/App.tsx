import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './components/app/AppLayout';
import Editor from './components/editor/Editor';
import EditorFormatButtons from './components/editor/EditorFormatButtons';
import EditorItemBox from './components/editor/EditorItemBox';
import EditorLanguageSelect from './components/editor/EditorLanguageSelect';
import ThemeButton from './components/theme/ThemeButton';

/**
 * children render in AppLayout.Main
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <AppLayout.Header>
          <EditorItemBox>
            <EditorLanguageSelect />
            <EditorFormatButtons />
          </EditorItemBox>
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
      { path: '/info', element: <div>info</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
