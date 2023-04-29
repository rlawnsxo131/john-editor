import { globalStyle } from '@vanilla-extract/css';

import { themeDatasetSelector } from './styles/selector';
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
});

globalStyle('html, body, #root *', {
  boxSizing: 'inherit',
});

globalStyle(`:root${themeDatasetSelector.dark} :where(body, #root)`, {
  background: vars.color.gray2,
});

globalStyle(`:root${themeDatasetSelector.light} :where(body, #root)`, {
  background: vars.color.white,
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  color: vars.color.gray12,
});
