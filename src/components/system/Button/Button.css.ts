import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const base = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  outline: 'none',
  borderRadius: '4px',
  lineHeight: 'normal',
  cursor: 'pointer',
  padding: '0.25rem 1rem',
  fontSize: '1rem',
});

export const button = styleVariants({
  primary: [
    base,
    {
      color: 'white',
      background: vars.color['btn-primary'],
      border: `1px solid ${vars.color['btn-primary']}`,
      outlineColor: vars.color['btn-primary'],
      selectors: {
        '&:hover': {
          background: vars.color['btn-primary-hover'],
          border: `1px solid ${vars.color['btn-primary-hover']}`,
          outlineColor: vars.color['btn-primary-hover'],
        },
      },
    },
  ],
  ghost: [base, {}],
});
