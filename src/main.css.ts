import { globalStyle } from '@vanilla-extract/css';

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
  background: vars.bg.background,
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: vars.color.gray2,
    },
  },
});

globalStyle('html, body, #root *', {
  boxSizing: 'inherit',
});
