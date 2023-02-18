import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  border: 0,
  borderRadius: '3px',
  lineHeight: 'normal',
  cursor: 'pointer',
});

export const variants = styleVariants({
  primary: [base, {}],
  ghost: [base, {}],
});
