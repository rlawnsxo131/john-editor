import { style } from '@vanilla-extract/css';

export const block = style({
  display: 'flex',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
});

export const button = style({
  border: '0',
  padding: '0.25rem 1rem',
  borderRadius: '3px',
  lineHeight: 'normal',
  cursor: 'pointer',
  selectors: {
    '& + &': {
      marginLeft: '1rem',
    },
  },
});
