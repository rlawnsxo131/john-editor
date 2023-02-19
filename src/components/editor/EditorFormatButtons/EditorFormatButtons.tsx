import Button from '@/components/system/Button';
import { promiseUtils } from '@/lib/utils';
import { editorService } from '@/services';

import { block } from './EditorFormatButtons.css';

export default function EditorFormatButtons() {
  const formatAll = () => {
    Promise.allSettled([
      editorService.formatOrigin(),
      editorService.formatModify(),
    ]).then((results) => {
      results.forEach((result, idx) => {
        if (!promiseUtils.isFulfilled(result)) {
          console.error('error idx:', idx);
        }
      });
    });
  };

  const formatLeft = () =>
    editorService.formatOrigin()?.catch((reason) => {
      console.error(reason);
    });

  const formatRight = () =>
    editorService.formatModify()?.catch((reason) => {
      console.error(reason);
    });

  return (
    <div className={block}>
      <Button onClick={formatLeft}>Pretty Left</Button>
      <Button onClick={formatAll}>Pretty All</Button>
      <Button onClick={formatRight}>Pretty Right</Button>
    </div>
  );
}
