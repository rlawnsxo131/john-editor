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
});

createGlobalTheme('[data-theme="dark"]', vars, {
  color: {
    white: '#FFFFFF',
    ...cyanDark,
    ...grayDark,
    ...redDark,
  },
});
