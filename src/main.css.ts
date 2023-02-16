import { globalStyle } from '@vanilla-extract/css';

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
  // '@media': {
  //   '@media (prefers-color-scheme: light)': {},
  // },
  //   @media (prefers-color-scheme: light) {
  //     :root {
  //       color: #213547;
  //       background-color: #ffffff;
  //     }
  //   }
});

globalStyle('html, body, #root *', {
  boxSizing: 'inherit',
});
