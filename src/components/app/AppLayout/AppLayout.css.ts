import { style } from '@vanilla-extract/css';

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
});

export const content = style({
  display: 'flex',
  paddingTop: '3rem',
  height: 'calc(100% - 3rem)',
});
