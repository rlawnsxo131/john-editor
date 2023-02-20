import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '4rem',
  paddingLeft: '4rem',
  display: 'flex',
  background: vars.color['bg-header'],
});

export const headerContent = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '1rem',
});

export const headerTitleLogo = style({
  color: vars.color.white,
  fontSize: '1.5rem',
  fontWeight: 500,
});

export const body = style({
  display: 'flex',
  paddingTop: '4rem',
  height: '100%',
});

export const main = style({
  flex: 1,
  display: 'flex',
});
