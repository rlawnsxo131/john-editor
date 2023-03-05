import loadingIcon from '@/assets/loading.svg';
import OpaqueLayer from '@/components/system/OpaqueLayer';
import SVGIcon from '@/components/system/SVGIcon';

import { block, icon } from './Loading.css';

export default function Loading() {
  return (
    <>
      <OpaqueLayer />
      <div className={block}>
        <SVGIcon src={loadingIcon} className={icon} />
      </div>
    </>
  );
}
