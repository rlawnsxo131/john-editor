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
  padding: '0.4rem 1rem',
  fontSize: '1rem',
});

export const button = styleVariants({
  primary: [
    base,
    {
      color: 'white',
      background: vars.color['bg-btn-primary'],
      border: `1px solid ${vars.color['bg-btn-primary']}`,
      outlineColor: vars.color['bg-btn-primary'],
      selectors: {
        '&:hover': {
          background: vars.color['bg-btn-primary-hover'],
          border: `1px solid ${vars.color['bg-btn-primary-hover']}`,
          outlineColor: vars.color['bg-btn-primary-hover'],
        },
      },
    },
  ],
  ghost: [base, {}],
});
