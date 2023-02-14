import AppAside from './components/app/AppAside';
import AppHeader from './components/app/AppHeader';
import AppLayout from './components/app/AppLayout';
import Editor from './components/editor/Editor';
import EditorFormatButtons from './components/editor/EditorFormatButtons';

function App() {
  return (
    <AppLayout
      Header={<AppHeader />}
      Aside={<AppAside />}
      Main={
        <Editor>
          <EditorFormatButtons />
        </Editor>
      }
    />
  );
}

export default App;
