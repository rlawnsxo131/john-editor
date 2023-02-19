import { globalStyle } from '@vanilla-extract/css';

import { themeDatasetSelector } from './styles/selectors';
import { vars } from './styles/theme.css';

globalStyle('html, body, #root', {
  margin: 0,
  padding: 0,
  height: '100%',
  boxSizing: 'border-box',
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  colorScheme: 'light dark',
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTextSizeAdjust: '100%',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: vars.color.gray2,
    },
  },
});

globalStyle('html, body, #root *', {
  boxSizing: 'inherit',
});

globalStyle(themeDatasetSelector.dark, {
  background: vars.color.gray2,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  color: vars.color.gray12,
});
