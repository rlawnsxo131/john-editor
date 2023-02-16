import { promiseUtils } from '@/lib/utils';
import { editorService } from '@/services';

import { block, button } from './EditorFormatButtons.css';

export default function EditorFormatButtons() {
  const formatAll = () => {
    Promise.allSettled([
      editorService.formatOrigin(),
      editorService.formatModify(),
    ]).then((results) => {
      results.forEach((result) => {
        if (!promiseUtils.isFulfilled(result)) {
          console.error('error');
        }
      });
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
