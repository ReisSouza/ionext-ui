import { Box, DatePicker, DatePickerProps } from '@ionext-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Datepicker',
  component: DatePicker,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="div" css={{ minHeight: '400px' }}>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {},
} as Meta<DatePickerProps>

export const Primary: StoryObj<DatePickerProps> = {
  args: {},
}
