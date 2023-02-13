import AppAside from './components/app/AppAside';
import AppHeader from './components/app/AppHeader';
import AppLayout from './components/app/AppLayout';
import Editor from './components/editor/Editor';
import EditorFunctionButtons from './components/editor/EditorFunctionButtons';

function App() {
  return (
    <AppLayout
      Header={<AppHeader />}
      Aside={<AppAside />}
      Main={
        <Editor>
          <EditorFunctionButtons />
        </Editor>
      }
    />
  );
}

export default App;
