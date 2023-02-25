import { style } from '@vanilla-extract/css';

import { buttonBaseStyle } from '@/styles/base.css';
import { vars } from '@/styles/theme.css';

export const block = style({
  position: 'relative',
  top: 0,
  left: 0,
  width: '8rem',
  display: 'flex',
  flexDirection: 'column',
  background: vars.color['bg-select'],
});

export const selectTrigger = style([
  buttonBaseStyle,
  {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'none',
  },
]);

export const ul = style({
  display: 'flex',
  flexDirection: 'column',
  background: vars.color['bg-select'],
});
