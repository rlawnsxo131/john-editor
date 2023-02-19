import { globalStyle, style } from '@vanilla-extract/css';

export const block = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
});

globalStyle(`${block} button + button`, {
  marginLeft: '2rem',
});
