import { globalStyle, style } from '@vanilla-extract/css';

export const block = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${block} button + button`, {
  marginLeft: '2rem',
});
