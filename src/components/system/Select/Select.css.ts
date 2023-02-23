import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const block = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: vars.color['bg-select'],
});

export const ul = style({
  display: 'flex',
  flexDirection: 'column',
  background: vars.color['bg-select'],
});
