import { cyan, cyanDark, gray, grayDark, red, redDark } from '@radix-ui/colors';
import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

type ColorKey = keyof typeof cyan | keyof typeof gray | keyof typeof red;
type Color = Record<ColorKey, ColorKey>;

const color = Object.keys({ ...cyan, ...gray, ...red }).reduce<
  Record<string, string>
>((acc, key) => {
  acc[key] = key;
  return acc;
}, {}) as Color;

export const vars = createGlobalThemeContract({
  color,
});

createGlobalTheme('[data-theme="light"]', vars, {
  color: {
    ...gray,
    ...cyan,
    ...red,
  },
});

createGlobalTheme('[data-theme="dark"]', vars, {
  color: {
    ...grayDark,
    ...cyanDark,
    ...redDark,
  },
});
