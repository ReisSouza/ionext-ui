import { styled } from '@/styles'

export const HeaderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: 'stretch',
  height: 'auto',
  flexDirection: 'column',
  marginBottom: '$4',

  '@table': {
    flexDirection: 'row',
  },
})

export const HeaderWrappedFilter = styled('div', {
  display: 'flex',
  gap: '$2',
})

export const WrappedSearch = styled('form', {
  display: 'flex',
  gap: '$3',
})

export const WrappedTrashIcon = styled('div', {
  background: '$feedback-error-normal',
  margin: '0 $1',
  color: '$white',
  borderRadius: '$1',
  display: 'flex',
  width: '40px',
  height: '40px',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonIcon = styled('button', {
  background: '$primary-normal',
  width: '32px',
  height: '32px',
  borderRadius: '$1',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
})
