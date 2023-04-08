import { createStitches, defaultThemeMap } from '@stitches/react'

import { MainTheme } from './themes/main/main'

export type { CSS } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  config,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  media: {},
  theme: MainTheme,
})
