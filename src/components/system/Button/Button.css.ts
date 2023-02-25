import { styleVariants } from '@vanilla-extract/css';

import { buttonBaseStyle } from '@/styles/base.css';
import { vars } from '@/styles/theme.css';

export const button = styleVariants({
  primary: [
    buttonBaseStyle,
    {
      color: 'white',
      background: vars.color['bg-btn-primary'],
      border: `1px solid ${vars.color['bg-btn-primary']}`,
      outlineColor: vars.color['bg-btn-primary'],
      selectors: {
        '&:hover': {
          background: vars.color['bg-btn-primary-hover'],
          border: `1px solid ${vars.color['bg-btn-primary-hover']}`,
          outlineColor: vars.color['bg-btn-primary-hover'],
        },
      },
    },
  ],
  ghost: [buttonBaseStyle, {}],
});
