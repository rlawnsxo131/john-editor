import { style } from '@vanilla-extract/css';

import { vars, zIndexes } from '@/styles';

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '3rem',
  paddingLeft: '3.25rem',
  display: 'flex',
  background: vars.color['bg-header'],
  zIndex: zIndexes.header,
});

export const headerContent = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '1rem',
});

export const headerTitleBlock = style({
  display: 'flex',
});

export const headerTitleLogo = style({
  color: vars.color.white,
  fontSize: '1.5rem',
  margin: 0,
  fontWeight: 500,
});

export const betaTag = style({
  alignSelf: 'flex-end',
  display: 'flex',
  alignItems: 'center',
  color: vars.color.white,
  background: vars.color['bg-beta-tag'],
  padding: '0.125rem',
  borderRadius: '4px',
  marginLeft: '0.25rem',
});

export const body = style({
  display: 'flex',
  paddingTop: '3rem',
  height: '100%',
});

export const main = style({
  flex: 1,
  display: 'flex',
});

export const aside = style({
  display: 'flex',
  flexDirection: 'column',
  width: '3.25rem',
  background: vars.color['bg-aside'],
});

export const asideLink = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.25rem',
  textDecoration: 'none',
  selectors: {
    '& + &': {
      marginTop: '0.5rem',
    },
  },
});

export const asideLinkIcon = style({
  filter:
    'invert(76%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(64%) contrast(100%)',
  selectors: {
    '&:hover': {
      filter:
        'invert(86%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(100%) contrast(98%)',
    },
    '.active &': {
      filter:
        'invert(86%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(100%) contrast(98%)',
    },
  },
});
