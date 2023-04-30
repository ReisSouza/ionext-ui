import { Calendar, CalendarProps } from '@ionext-ui/datepicker'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Datepicker',
  component: Calendar,
  args: {},
  argTypes: {},
} as Meta<CalendarProps>

export const Primary: StoryObj<CalendarProps> = {
  args: {},
}
