import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  outline: 'none',
  borderRadius: '3px',
  lineHeight: 'normal',
  cursor: 'pointer',
});

export const color = styleVariants({
  primary: [base, {}],
  ghost: [base, {}],
});
