import { style } from '@vanilla-extract/css';

import { buttonBaseStyle, ulBaseStyle } from '@/styles';
import { vars } from '@/styles';

export const block = style({
  position: 'relative',
  top: 0,
  left: 0,
  width: '8rem',
  display: 'flex',
  flexDirection: 'column',
  background: vars.color['bg-select-box'],
});

export const selectTrigger = style([
  buttonBaseStyle,
  {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'none',
    color: vars.color['text-select-box'],
    background: vars.color['bg-select-box-trigger'],
  },
]);

export const ul = style([
  ulBaseStyle,
  {
    position: 'absolute',
    top: '3rem',
    borderRadius: '4px',
    background: vars.color['bg-select-box'],
  },
]);

export const li = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 0.725rem',
  color: vars.color['text-select-box'],
  background: vars.color['bg-select-box'],
  cursor: 'pointer',
  selectors: {
    '&:nth-of-type(1)': {
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
    },
    '&:nth-last-of-type(1)': {
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    },
    '&:hover': {
      background: vars.color['bg-select-box-active'],
    },
  },
});
