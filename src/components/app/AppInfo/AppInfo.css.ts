import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles';

export const block = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 3rem 3rem 3rem',
});

export const contentSection = style({
  display: 'flex',
  flexDirection: 'column',
  background: vars.color['bg-content-sub'],
  padding: '1.25rem',
  borderRadius: '4px',
  marginTop: '1rem',
});

globalStyle(`${block} h3`, {
  margin: 0,
  padding: 0,
  fontSize: '1.5rem',
});

globalStyle(`${contentSection} ul`, {
  fontSize: '1.25rem',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-line',
  lineHeight: 1.725,
  marginTop: '1rem',
  color: vars.color.gray12,
});

globalStyle(`${contentSection} a`, {
  textDecoration: 'none',
  fontSize: '1.25rem',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-line',
  lineHeight: 1.725,
  marginLeft: '0.25rem',
  marginTop: '1rem',
  color: vars.color.cyan9,
});

globalStyle(`${contentSection} a:hover`, {
  textDecoration: 'underline',
});
