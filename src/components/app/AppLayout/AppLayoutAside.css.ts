import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const aside = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '0.25rem',
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
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
  selectors: {
    '&': {
      filter:
        'invert(76%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(64%) contrast(100%)',
    },
    '&:hover': {
      filter:
        'invert(86%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(100%) contrast(98%)',
    },
    // [`${themeDatasetSelector.light} &`]: {
    //   filter:
    //     'invert(30%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(80%) contrast(100%)',
    // },
    // [`${themeDatasetSelector.light} &:hover`]: {
    //   filter:
    //     'invert(50%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(100%) contrast(98%)',
    // },
    // [`${themeDatasetSelector.dark} &`]: {
    //   filter:
    //     'invert(76%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(64%) contrast(100%)',
    // },
    // [`${themeDatasetSelector.dark} &:hover`]: {
    //   filter:
    //     'invert(86%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(100%) contrast(98%)',
    // },
  },
});
