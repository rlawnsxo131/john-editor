import { styleVariants } from '@vanilla-extract/css';

import { buttonBaseStyle, vars } from '@/styles';

export const button = styleVariants({
  primary: [
    buttonBaseStyle,
    {
      color: vars.color.white,
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
