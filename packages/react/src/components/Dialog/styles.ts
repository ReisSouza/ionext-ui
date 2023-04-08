import { keyframes, styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 0.16 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$black',
  opacity: 0.16,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
})

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$text',
  fontSize: 17,
})

export const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: '$text',
  fontSize: 15,
  lineHeight: 1.5,
})

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$text',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$primary-light-hover' },
  '&:focus': { boxShadow: `0 0 0 2px $primary-light-active}` },
})

export const Flex = styled('div', {
  display: 'flex',
  gap: '$6',
  justifyContent: 'flex-end',
  marginTop: '$6',
})
