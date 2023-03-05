import { cyan, cyanDark, gray, grayDark, red, redDark } from '@radix-ui/colors';
import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

import { themeDatasetSelector } from './selector';

type ColorKey =
  | keyof typeof cyan
  | keyof typeof gray
  | keyof typeof red
  | keyof typeof staticColorVar;

type ColorVar = Record<ColorKey, ColorKey>;

const staticColorVar = {
  black: '#000',
  white: '#FFF',

  'bg-aside': 'hsl(0deg 0% 16%)',
  'bg-header': 'hsl(0deg 0% 16%)',

  'bg-btn-primary': 'hsl(191deg 91% 37%)',
  'bg-btn-primary-hover': 'hsl(190, 95.0%, 39.0%)',

  'bg-select': 'hsl(0deg 0% 16%)',
  'bg-select-active': 'hsl(192deg 79% 13%)',
  'bg-select-trigger': 'hsl(0deg 0% 11%)',

  'bg-opaque-layer': 'rgba(100, 100, 100, 0.5)',

  'text-select': 'hsl(0deg 0% 93%)',
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

const keys = Object.keys(lightColors) as ColorKey[];
const colorVar = keys.reduce((acc, key) => {
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
