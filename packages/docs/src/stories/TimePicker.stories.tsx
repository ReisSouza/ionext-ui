import { TimePicker,TimePickerProps } from '@ionext-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TimePicker',
  component: TimePicker,
  args: {
    
  },
  argTypes: {},
} as Meta<TimePickerProps>

export const Default: StoryObj<TimePickerProps> = {
  args: {
    variant: 'primary',
  },
}
