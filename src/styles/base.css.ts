import { style } from '@vanilla-extract/css';

export const anchorBaseStyle = style({
  cursor: 'pointer',
  textDecoration: 'none',
});

export const buttonBaseStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  lineHeight: 'normal',
  cursor: 'pointer',
  padding: '0.25rem 0.725rem',
  fontSize: '1rem',
  fontWeight: 500,
});

export const ulBaseStyle = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'absolute',
  top: '3rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const visullayHiddenBaseStyle = style({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});
