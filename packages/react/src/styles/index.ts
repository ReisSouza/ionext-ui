import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
  borderWidths,
  shadows,
} from '@ionext-ui/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'
export type { CSS } from '@stitches/react'
export const { styled, css, globalCss, keyframes, getCssText, theme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },
    media: {},
    theme: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radii,
      space,
      borderWidths,
      shadows,
    },
  })
