import { cyan, cyanDark, gray, grayDark, red, redDark } from '@radix-ui/colors';
import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

import { themeDatasetSelector } from './selectors';

type ColorKey =
  | keyof typeof cyan
  | keyof typeof gray
  | keyof typeof red
  | keyof typeof staticColorVar;

type ColorVar = Record<ColorKey, ColorKey>;

const staticColorVar = {
  white: '#FFF',

  'btn-primary': 'hsl(191deg 91% 37%)',
  'btn-primary-hover': 'hsl(190, 95.0%, 39.0%)',
} as const;

const lightColors = {
  ...cyan,
  ...gray,
  ...red,
  ...staticColorVar,
} as const;

const darkColors = {
  ...cyanDark,
  ...grayDark,
  ...redDark,
  ...staticColorVar,
} as const;

const colorVar = (Object.keys(lightColors) as ColorKey[]).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {} as ColorVar);

export const vars = createGlobalThemeContract(
  {
    color: {
      ...colorVar,
    },
  },
  (value) => `--color-${value}`,
);

createGlobalTheme(themeDatasetSelector.light, vars, {
  color: {
    ...lightColors,
  },
});

createGlobalTheme(themeDatasetSelector.dark, vars, {
  color: {
    ...darkColors,
  },
});
