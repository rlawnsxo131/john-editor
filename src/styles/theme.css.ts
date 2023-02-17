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
  white: '#FFFFFF',
};

const color = Object.keys(
  Object.assign(initialColorVar, cyan, gray, red),
).reduce<Record<string, string>>((acc, key) => {
  acc[key] = key;
  return acc;
}, {}) as ColorVar;

export const vars = createGlobalThemeContract(
  {
    color: {
      ...color,
    },
  },
  (value) => `--color-${value}`,
);

createGlobalTheme('[data-theme="light"]', vars, {
  color: {
    ...initialColorVar,
    ...cyan,
    ...gray,
    ...red,
  },
});

createGlobalTheme('[data-theme="dark"]', vars, {
  color: {
    ...initialColorVar,
    ...cyanDark,
    ...grayDark,
    ...redDark,
  },
});
