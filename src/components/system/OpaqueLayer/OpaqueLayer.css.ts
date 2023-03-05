import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import zIndexes from '@/styles/zIndexes';

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
