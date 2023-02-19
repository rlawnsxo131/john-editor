import { style } from '@vanilla-extract/css';

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
});

export const headerContent = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export const headerTitleLogo = style({
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

export const aside = style({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});
