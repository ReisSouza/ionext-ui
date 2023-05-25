import { styled } from '@/styles'

export const SelectContainer = styled('div', {
  position: 'relative',
})

export const SelectButton = styled('button', {
  padding: '0.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
})

export const Dropdown = styled('ul', {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  backgroundColor: '#fff',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
})

export const DropdownItem = styled('li', {
  padding: '0.5rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
  '&.selected': {
    backgroundColor: '#e0e0e0',
  },
  '&:focus': {
    outline: 'none',
    backgroundColor: '#e0e0e0',
  },
})
