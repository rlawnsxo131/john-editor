import { style } from '@vanilla-extract/css';

export const anchorBaseStyle = style({
  cursor: 'pointer',
  textDecoration: 'none',
});

export const visullayHiddenBaseStyle = style({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});
