import { style } from '@vanilla-extract/css';

export const block = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 500,
});
