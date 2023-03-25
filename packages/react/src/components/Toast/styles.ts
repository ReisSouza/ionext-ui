import { styled } from '@/styles'
import * as Toast from '@radix-ui/react-toast'

export const Root = styled(Toast.Root, {
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '15px',
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'space-between',
  variants: {
    variant: {
      danger: {
        background: '$feedback-error-light',
        borderRightWidth: '6px',
        borderRightStyle: 'solid',
        borderRightColor: '$feedback-error-normal',
      },
      success: {
        background: '$feedback-success-light',
        borderRightWidth: '6px',
        borderRightStyle: 'solid',
        borderRightColor: '$feedback-success-normal',
      },
      warning: {
        background: '$feedback-help-light',
        borderRightWidth: '6px',
        borderRightStyle: 'solid',
        borderRightColor: '$feedback-help-normal',
      },
      default: {},
    },
  },
  defaultVariants: {},
})
// .ToastRoot[data-state='open'] {
//     animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
//   }
//   .ToastRoot[data-state='closed'] {
//     animation: hide 100ms ease-in;
//   }
//   .ToastRoot[data-swipe='move'] {
//     transform: translateX(var(--radix-toast-swipe-move-x));
//   }
//   .ToastRoot[data-swipe='cancel'] {
//     transform: translateX(0);
//     transition: transform 200ms ease-out;
//   }
//   .ToastRoot[data-swipe='end'] {
//     animation: swipeOut 100ms ease-out;
//   }

// @keyframes hide {
//     from {
//       opacity: 1;
//     }
//     to {
//       opacity: 0;
//     }
//   }

//   @keyframes slideIn {
//     from {
//       transform: translateX(calc(100% + var(--viewport-padding)));
//     }
//     to {
//       transform: translateX(0);
//     }
//   }

//   @keyframes swipeOut {
//     from {
//       transform: translateX(var(--radix-toast-swipe-end-x));
//     }
//     to {
//       transform: translateX(calc(100% + var(--viewport-padding)));
//     }
//   }

export const Section = styled('section', {
  gap: '$2',
  display: 'flex',
  alignItems: 'center',
  flex: 1,

  variants: {
    variant: {
      danger: {
        '& svg': {
          '& path': {
            fill: '$feedback-error-normal',
          },
        },
      },
      warning: {
        '& svg': {
          '& path': {
            fill: '$feedback-help-normal',
          },
        },
      },
      success: {
        '& svg': {
          '& path': {
            fill: '$feedback-success-normal',
          },
        },
      },
      default: {},
    },
  },
})

export const WrappedContent = styled('hgroup', {
  width: '100%',
})

export const Title = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '5px',
  fontWeight: 500,
  color: '$text',

  fontSize: '15px',
})

export const Description = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$text',
  fontSize: '13px',
  lineHeight: 1.3,
})

export const Action = styled(Toast.Action, {
  gridArea: 'action',
})

export const Close = styled(Toast.Close, {
  all: 'unset',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: ' flex',
  flexDirection: ' column',
  padding: '25px',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
