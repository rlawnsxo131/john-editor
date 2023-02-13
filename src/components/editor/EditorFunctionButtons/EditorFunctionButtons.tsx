import { promiseUtils } from '@/lib/utils';
import { editorService } from '@/services';

import { block, button } from './EditorFunctionButtons.css';

export default function EditorFunctionButtons() {
  const formatAll = () => {
    Promise.allSettled([
      editorService.formatOrigin(),
      editorService.formatModify(),
    ]).then((result) => {
      if (promiseUtils.isEveryFulfilledSettledResult(result)) return;
      console.error('error');
    });
  };
  const formatLeft = () => editorService.formatOrigin();
  const formatRight = () => editorService.formatModify();

  return (
    <div className={block}>
      <button className={button} onClick={formatAll}>
        pretty all
      </button>
      <button className={button} onClick={formatLeft}>
        pretty left
      </button>
      <button className={button} onClick={formatRight}>
        pretty right
      </button>
    </div>
  );
}
