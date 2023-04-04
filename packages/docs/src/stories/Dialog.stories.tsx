import type { ComponentStory, Meta } from '@storybook/react'
import { Dialog, DialogProps, Button, Box, TextField } from '@ionext-ui/react'

export default {
  title: 'Display/Dialog',
  component: Dialog,
  args: {
    trigger: <Button>Open Dialog</Button>,
    title: 'Fazer login',
    description: 'Faça login e aproveite o melhor da plataforma',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextField label="Email" />
        <TextField label="Password" />
      </div>
    ),
    footer: [
      <Button variant="outlined" key={1}>
        Cancela
      </Button>,
      <Button key={2}>Login</Button>,
    ],
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
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

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />
export const Default = Template.bind({})
