import type { ComponentStory, Meta } from '@storybook/react'

import {
  Dialog,
  DialogProps,
  Button,
  Box,
  TextField,
  DialogCLose,
} from '@ionext-ui/react'

export default {
  title: 'Display/Dialog',
  component: Dialog,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', justifyContent: 'center' }}>
          {Story()}
        </Box>
      )
    },
  ],

  argTypes: {
    open: { control: { type: 'boolean' } },
    defaultOpen: { control: { type: 'boolean' } },
    title: { control: { type: 'string' } },
    description: { control: { type: 'string' } },
    trigger: { control: { type: 'jsx.element' } },
  },
} as Meta<DialogProps>

const Template: ComponentStory<typeof Dialog> = (args) => {
  return (
    <Dialog
      {...args}
      modal
      onOpenChange={() => {}}
      title="Fazer login"
      description="Faça login e aproveite o melhor da plataforma"
      content={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField label="Email" />
          <TextField label="Password" />
        </div>
      }
      footer={[
        <DialogCLose asChild key={1}>
          <Button variant="outlined">Cancela</Button>
        </DialogCLose>,
        <Button key={2}>Login</Button>,
      ]}
      trigger={<Button>Open Dialog</Button>}
    />
  )
}
export const Default = Template.bind({})
