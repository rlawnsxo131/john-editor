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

const lightColors = Object.assign({}, initialColorVar, cyan, gray, red);
const colorVar = Object.keys(lightColors).reduce<Record<string, string>>(
  (acc, key) => {
    acc[key] = key;
    return acc;
  },
  {},
) as ColorVar;

export const vars = createGlobalThemeContract(
  {
    color: {
      ...colorVar,
    },
  },
  (value) => `--color-${value}`,
);

createGlobalTheme('[data-theme="light"]', vars, {
  color: {
    ...lightColors,
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
