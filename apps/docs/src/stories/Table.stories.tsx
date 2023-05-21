import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableProps } from '@ionext-ui/react'
import { PencilSimple, TrashSimple } from '@phosphor-icons/react'

const rowsDefault = Array.from(Array(6)).map((_, index) => {
  return {
    cols: ['18/12/2023', 'R$ 230,00', 'sucesso', 'Reis Souza'],
    id: `${index}`,
  }
})
const colsDefault = ['Data', 'Valor', 'Status', 'Titular']

const onItemsRemoveAsync = (items: string[]): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    // Lógica para remover os itens aqui...

    // Se a remoção for bem-sucedida, chame o resolve()
    resolve()

    // Se ocorrer algum erro na remoção, chame o reject() e passe o erro como argumento
    // reject(new Error("Ocorreu um erro na remoção dos itens."));
  })
}

const meta = {
  title: 'Surfaces/Table',
  component: Table,

  argTypes: {},
} as Meta<TableProps>

export default meta
type Story = StoryObj<typeof meta>

const TableTemplate: Story = {
  render: ({ ...args }) => {
    return <Table {...args} cols={colsDefault} rows={rowsDefault} />
  },
}

export const WithAllProperty: StoryObj<TableProps> = {
  ...TableTemplate,
  args: {
    onFilter: (v) => console.log(v),
    onAdd: () => {},
    labelButtonAdd: 'Adicionar',
    options: [
      {
        icon: <PencilSimple />,
        label: 'Editar',
        onClick: (id) => console.log(`Clicou para editar o ${id}`),
      },
      {
        icon: <TrashSimple />,
        label: 'Deletar',
        onClick: (id) => console.log(`Clicou para deletar o ${id}`),
      },
    ],
    onSort: (v) => console.log(v),
    onChecked: () => {},
    onItemsSelected: () => {},
    onItemsRemove: onItemsRemoveAsync,
  },
}

export const WithRounded: StoryObj<TableProps> = {
  ...TableTemplate,
  args: {
    onFilter: (v) => console.log(v),
    onAdd: () => {},
    labelButtonAdd: 'Adicionar',
    options: [
      {
        icon: <PencilSimple />,
        label: 'Editar',
        onClick: (id) => console.log(`Clicou para editar o ${id}`),
      },
      {
        icon: <TrashSimple />,
        label: 'Deletar',
        onClick: (id) => console.log(`Clicou para deletar o ${id}`),
      },
    ],
    onSort: (v) => console.log(v),
    onChecked: () => {},
    onItemsSelected: () => {},
    onItemsRemove: onItemsRemoveAsync,
    hasRounded: true,
  },
}

export const Default: StoryObj<TableProps> = {
  ...TableTemplate,
  args: {},
}
export const WithFilter: StoryObj<TableProps> = {
  ...TableTemplate,
  args: {
    onFilter: (v) => console.log(v),
  },
}

export const WithActionAdd: StoryObj<TableProps> = {
  ...TableTemplate,
  args: {
    onAdd: () => {},
    labelButtonAdd: 'Adicionar',
  },
}

export const WithCheckbox: StoryObj<TableProps> = {
  ...TableTemplate,
  args: {
    onChecked: () => {},
    onItemsSelected: () => {},
  },
}

export const WithOptions: StoryObj<TableProps> = {
  ...TableTemplate,
  args: {
    options: [
      {
        icon: <PencilSimple />,
        label: 'Editar',
        onClick: (id) => console.log(`Clicou para editar o ${id}`),
      },
      {
        icon: <TrashSimple />,
        label: 'Deletar',
        onClick: (id) => console.log(`Clicou para deletar o ${id}`),
      },
    ],
  },
}

export const WithSort: StoryObj<TableProps> = {
  ...TableTemplate,
  args: {
    onSort: (v) => console.log(v),
  },
}
