import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { zIndexes } from '@/styles';

export const block = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  zIndex: zIndexes.opaqueLayer,
  background: vars.color['bg-opaque-layer'],
});
