import type { Meta, Story } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@ionext-ui/react'
import { useState } from 'react'

const renderToast = {
  danger: {
    variant: 'danger',
    title: 'Conta deletada com sucesso.',
    description:
      'Sua conta foi deletada com sucesso, não sera mais possível acessa as informações dessa conta!',
  },
  success: {
    variant: 'success',
    title: 'Conta criada com sucesso.',
    description:
      'Sua conta foi criado com sucesso, para mais informações acesse seu email!',
  },
  warning: {
    variant: 'warning',
    title: 'Alertar ',
    description:
      'Para deletar sua conta e preciso que não haja vinculo com consultas futuras',
  },
}
export default {
  title: 'Display/Toast',
  component: Toast,
  args: {
    variant: 'default',
  },

  argTypes: {
    variant: {
      options: ['default', 'warning', 'danger', 'success'],
      control: {
        type: 'inline-radio',
      },
    },
    open: { control: { type: 'boolean' } },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            justifyContent: 'center',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>
const TemplateSuccess: Story<ToastProps> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Toast
        {...args}
        open={open}
        variant="success"
        title="Conta criada com sucesso."
        description="Sua conta foi criado com sucesso, para mais informações acesse seu email!"
        onOpenChange={setOpen}
      />

      <Button color="success" onClick={() => setOpen(true)}>
        teste
      </Button>
    </>
  )
}
export const Success: Story<ToastProps> = TemplateSuccess.bind({})
Success.args = {}

const TemplateDanger: Story<ToastProps> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Toast
        {...args}
        open={open}
        variant="danger"
        title="Conta deletada com sucesso."
        description="Sua conta foi deletada com sucesso, não sera mais possível acessa as informações dessa conta!"
        onOpenChange={setOpen}
      />

      <Button color="danger" onClick={() => setOpen(true)}>
        teste
      </Button>
    </>
  )
}
export const Danger: Story<ToastProps> = TemplateDanger.bind({})
Danger.args = {}

const TemplateWarning: Story<ToastProps> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Toast
        {...args}
        open={open}
        variant="warning"
        title="Alertar "
        description="Para deletar sua conta e preciso que não haja vinculo com consultas futuras"
        onOpenChange={setOpen}
      />

      <Button color="secondary" onClick={() => setOpen(true)}>
        teste
      </Button>
    </>
  )
}
export const Warning: Story<ToastProps> = TemplateWarning.bind({})
Warning.args = {}

const TemplatePilha: Story<ToastProps> = (args) => {
  const [listOfToast, setListOfToast] = useState<
    {
      title: string
      description: string
      variant: string
      id: number
    }[]
  >([])
  return (
    <>
      {listOfToast.map((tostItem) => {
        return (
          <Toast
            key={tostItem.id}
            {...args}
            variant={tostItem.variant as 'success' | 'danger' | 'warning'}
            title={tostItem.title + tostItem.id}
            description={tostItem.description}
          />
        )
      })}
      <Button
        onClick={() =>
          setListOfToast((prevState) => {
            return [
              ...prevState,
              {
                ...renderToast.success,
                id: prevState.length + 1,
              },
            ]
          })
        }
        color="success"
      >
        Delete With Alerter
      </Button>
      <Button
        onClick={() =>
          setListOfToast((prevState) => {
            return [
              ...prevState,
              {
                ...renderToast.danger,
                id: prevState.length + 1,
              },
            ]
          })
        }
        color="danger"
      >
        Delete With Alerter
      </Button>
      <Button
        onClick={() =>
          setListOfToast((prevState) => {
            return [
              ...prevState,
              {
                ...renderToast.warning,
                id: prevState.length + 1,
              },
            ]
          })
        }
        color="secondary"
      >
        Delete
      </Button>
    </>
  )
}
export const Empilhamento: Story<ToastProps> = TemplatePilha.bind({})
Empilhamento.args = {}
