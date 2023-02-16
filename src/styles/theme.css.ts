import { cyan, cyanDark } from '@radix-ui/colors';
import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: Object.keys(cyan).reduce<Record<string, string | null>>((acc, key) => {
    acc[key] = null;
    return acc;
  }, {}),
});

export const lightClass = createTheme(vars, {
  color: {
    ...cyan,
  },
});

export const darkClass = createTheme(vars, {
  color: {
    ...cyanDark,
  },
});
