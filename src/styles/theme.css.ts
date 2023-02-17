import { cyan, cyanDark, gray, grayDark, red, redDark } from '@radix-ui/colors';
import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

type ColorKey =
  | keyof typeof cyan
  | keyof typeof gray
  | keyof typeof red
  | keyof typeof initialColorVar;

type ColorVar = Record<ColorKey, ColorKey>;

const initialColorVar = {
  white: 'white',
};

const color = Object.keys(Object.assign(cyan, gray, red)).reduce<
  Record<string, string>
>((acc, key) => {
  acc[key] = key;
  return acc;
}, initialColorVar) as ColorVar;

export const vars = createGlobalThemeContract(
  {
    color,
    bg: {
      background: 'background',
    },
  },
  (value) => `--color-${value}`,
);

createGlobalTheme('[data-theme="light"]', vars, {
  color: {
    white: '#FFFFFF',
    ...cyan,
    ...gray,
    ...red,
  },
  bg: {
    background: vars.color.white,
  },
});

createGlobalTheme('[data-theme="dark"]', vars, {
  color: {
    white: '#FFFFFF',
    ...cyanDark,
    ...grayDark,
    ...redDark,
  },
  bg: {
    background: vars.color.gray2,
  },
});
