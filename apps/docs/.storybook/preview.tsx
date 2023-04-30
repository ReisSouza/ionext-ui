import React from 'react'
import { themes } from '@storybook/theming'
import { ToastProvider } from '@ionext-ui/react'

export const decorators = [(Story) => <ToastProvider>{Story()}</ToastProvider>]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: {
    // theme: themes.dark,
  },
}