import * as Checkbox from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'

import { styled, keyframes } from '../../styles'
export const WrappedCheckbox = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$4',
  alignItems: 'center',
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',

  borderRadius: '$1',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:disabled': {
    background: '$border !important',
    color: '$white',
    cursor: 'not-allowed',
    borderColor: '$border !important',
  },

  variants: {
    size: {
      small: {
        width: '$4',
        height: '$4',
      },
      medium: {
        width: '$6',
        height: '$6',
      },
      large: {
        width: '$8',
        height: '$8',
      },
    },
    color: {
      primary: {
        border: '2px solid $primary-normal',

        '&:hover': {
          borderColor: '$primary-hover',
        },

        '&:active': {
          borderColor: '$primary-active',
        },

        '&[data-state="checked"]': {
          backgroundColor: '$primary-normal',
        },

        '&:focus, &[data-state="checked"]': {
          boxShadow: '0px 0px 0px 3px rgba(206, 229, 255, 1)',
        },
      },

      secondary: {
        border: '2px solid $secondary-normal',

        '&:hover': {
          borderColor: '$secondary-hover',
        },

        '&:active': {
          borderColor: '$secondary-active',
        },

        '&[data-state="checked"]': {
          backgroundColor: '$secondary-normal',
        },

        '&:focus, &[data-state="checked"]': {
          boxShadow: '0px 0px 0px 3px rgba(213, 228, 247, 1)',
        },
      },

      tertiary: {
        border: '2px solid $tertiary-normal',

        '&:hover': {
          borderColor: '$tertiary-hover',
        },

        '&:active': {
          borderColor: '$tertiary-active',
        },

        '&[data-state="checked"]': {
          backgroundColor: '$tertiary-normal',
        },

        '&:focus, &[data-state="checked"]': {
          boxShadow: '0px 0px 0px 3px rgba(238, 219, 255, 1)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
  position: 'relative',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="indeterminate"]': {
    '&::before': {
      content: `''`,
      display: 'block',
      background: '$primary-normal',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '8px',
      height: '2px',
      borderRadius: 'inherit',
    },
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
  variants: {
    isSmall: {
      true: {
        width: '$3',
        height: '$3',
      },
    },
  },
})

export const Label = styled(LabelPrimitive.Root, {
  color: '$secondary-normal',
  fontWeight: '$medium',
  lineHeight: '$default',

  '& > span': {
    fontSize: '$sm',
    color: '$secondary-light-active',
  },

  '& .isRequired': {
    color: '$feedback-error-normal',
  },
  variants: {
    size: {
      small: {
        fontSize: '$xxs',
      },
      medium: {
        fontSize: '$xs',
      },
      large: {
        fontSize: '$sm',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})

export const Hint = styled('span', {
  alignSelf: 'end',
  color: '$feedback-error-normal',
})
