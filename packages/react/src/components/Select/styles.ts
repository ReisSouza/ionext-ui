import * as Select from '@radix-ui/react-select'
import * as LabelPrimitive from '@radix-ui/react-label'

import { styled } from '@/styles'
import { CSS } from '@/types/css'

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const SelectTrigger = styled(Select.Trigger, {
  all: 'unset',
  borderWidth: '$thin',
  borderStyle: 'solid',
  borderColor: '$secondary-light-active',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 4,
  boxSizing: 'border-box',

  lineHeight: 1,
  gap: 5,
  backgroundColor: 'transparent',
  color: '$secondary-normal',
  width: '100%',
  fontSize: '$xxs !important',

  '& label': {
    width: '100%',
  },

  '&:hover': {
    borderColor: '$secondary-normal',
    color: '$secondary-normal',
  },
  '&:focus': { outline: 'none' },
  '&[data-placeholder]': {
    '&:hover': {
      color: '$secondary-normal !important',
    },
  },
  '&[data-disabled]': {
    color: '$secondary-normal',
    opacity: 0.6,
    pointerEvents: 'none',
  },

  variants: {
    size: {
      small: {
        height: '$8',

        lineHeight: '$base',

        fontSize: '$3',

        borderRadius: '$1',
        '& span:first-child': {
          paddingLeft: '$4',
        },
        '& span:last-child': {
          paddingRight: '$4',
        },

        padding: '$2 0',
      },
      medium: {
        height: '$10',

        borderRadius: '$1',

        fontSize: '$4',
        '& span:first-child': {
          paddingLeft: '$4',
        },
        '& span:last-child': {
          paddingRight: '$4',
        },

        padding: '$2 0',
      },
      large: {
        height: '$12',

        borderRadius: '$2',

        fontSize: '$5',
        '& span:first-child': {
          paddingLeft: '$4',
        },
        '& span:last-child': {
          paddingRight: '$4',
        },

        padding: '$3 0',
      },
    },
    variant: {
      primary: {},
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const Hint = styled('span', {
  alignSelf: 'end',
  color: '$feedback-error-normal',
})

export const SelectContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  position: 'absolute',
  left: '50% !important',
  transform: 'translateX(-50%) !important',
  borderRadius: 6,
  width: '100%',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

export const SelectViewport = styled(Select.Viewport, {
  padding: '$4 $2',
})

export const SelectItem = styled(Select.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: '$secondary-normal',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: '$6',
  padding: '0 $4',
  position: 'relative',
  userSelect: 'none',
  fontWeight: '$medium',

  '&[data-disabled]': {
    color: '$secondary-normal',
    opacity: 0.6,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    background: '$primary-light-normal',
    color: '$secondary-hover',
  },

  variants: {
    selected: {
      true: {
        background: '$primary-light-hover',
      },
    },
  },
})

export const SelectItemIndicator = styled(Select.ItemIndicator, {
  //   position: 'absolute',
  //   left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$secondary-normal',
})

const scrollButtonStyles: CSS = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$primary-normal',
  cursor: 'default',
}

export const SelectScrollUpButton = styled(
  Select.ScrollUpButton,
  scrollButtonStyles,
)

export const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles,
)

export const SelectLabel = styled(Select.Label, {
  padding: '0 $4',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '25px',
  color: '$secondary-active',
})

export const SelectSeparator = styled(Select.Separator, {
  height: 1,
  backgroundColor: '$border',
  margin: '$1',
})

export const Label = styled(LabelPrimitive.Root, {
  color: '$secondary-normal',
  variants: {
    size: {
      small: {
        fontSize: '$sm',
      },
      medium: {
        fontSize: '$md',
      },
      large: {
        fontSize: '$lg',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})
