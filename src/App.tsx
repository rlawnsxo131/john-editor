import AppLayout from './components/app/AppLayout';
import Editor from './components/editor/Editor';
import EditorFormatButtons from './components/editor/EditorFormatButtons';

function App() {
  return (
    <AppLayout>
      <AppLayout.Header />
      <AppLayout.Body>
        <AppLayout.Aside />
        <AppLayout.Main>
          <Editor>
            <EditorFormatButtons />
          </Editor>
        </AppLayout.Main>
      </AppLayout.Body>
    </AppLayout>
  );
}

export default App;
