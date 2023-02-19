import { globalStyle, style } from '@vanilla-extract/css';

import { themeDatasetSelector } from '@/styles/selectors';

export const parentClass = style({});

globalStyle(`${themeDatasetSelector.dark} ${parentClass}`, {
  filter:
    'invert(86%) sepia(7%) saturate(0%) hue-rotate(160deg) brightness(108%) contrast(98%)',
});
