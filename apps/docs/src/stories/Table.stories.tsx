import type { ComponentStory } from '@storybook/react'

import { Box, Table } from '@ionext-ui/react'

const rowsDefault = Array.from(Array(6)).map((_, index) => {
  return {
    cols: ['18/12/2023', 'R$ 230,00', 'sucesso', 'Reis Souza'],
    options: [{ label: 'teste', iconName: '', onClick: () => {} }],
    id: `${index}`,
  }
})
const colsDefault = ['Data', 'Valor', 'Status', 'Titular']

export default {
  title: 'Surfaces/Table',
  component: Table,
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', justifyContent: 'center', height: '600px' }}
        >
          {Story()}
        </Box>
      )
    },
  ],

  argTypes: {},
}
const Template: ComponentStory<typeof Table> = (args) => {
  return <Table cols={colsDefault} rows={rowsDefault} />
}
export const Default = Template.bind({})
