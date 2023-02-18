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
} as const;

const lightColors = {
  ...initialColorVar,
  ...cyan,
  ...gray,
  ...red,
} as const;

const colorVar = (Object.keys(lightColors) as ColorKey[]).reduce<ColorVar>(
  (acc, key) => {
    acc[key] = key;
    return acc;
  },
  {} as ColorVar,
);

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
