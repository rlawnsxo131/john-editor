import { style } from '@vanilla-extract/css';

import { rotate } from '@/styles/animation.css';
import zIndexes from '@/styles/zIndexes';

export const block = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: zIndexes.loading,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const icon = style({
  animation: `${rotate} 1.25s linear infinite`,
});
