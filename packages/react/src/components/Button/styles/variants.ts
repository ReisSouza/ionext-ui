export const variants = {
  variants: {
    hasRounded: {
      true: {
        borderRadius: '$pill',
      },
    },
    variant: {
      contained: {
        '& svg': {
          fill: '$white',
          '& path': {
            fill: '$white',
          },
        },
      },
      text: {
        background: 'transparent !important',
      },
      outlined: {
        borderWidth: 'thin',
        borderStyle: 'solid',
        borderColor: 'inherit',
        background: 'transparent !important',
        '&:not(:disabled):not(:active):hover': {
          background: 'transparent',
        },
        '&:active': {
          background: 'rgba(255, 255, 255, 0.16) !important',
        },
      },
    },
    size: {
      small: {
        height: '$8',

        padding: '$2 $4',

        lineHeight: '$base',

        fontSize: '$3',
      },
      medium: {
        padding: '$3 $6',
        height: '$10',

        fontSize: '$4',
      },
      large: {
        padding: '$4 $8',
        height: '$12',

        fontSize: '$5',
      },
    },
    hasIcon: {
      true: {
        gap: '$2',
      },
    },
    color: {
      primary: {
        color: '$white',
        background: '$primary-normal',
        '&:hover': {
          background: '$primary-hover',
        },
        '&:active': {
          background: '$primary-active',
          '&:hover': {
            background: '$primary-active',
          },
        },

        '&:focus': {
          boxShadow: '0px 0px 0px 3px rgba(206, 229, 255, 1)',
        },
      },
      secondary: {
        color: '$white',
        background: '$secondary-normal',
        '&:hover': {
          background: '$secondary-hover',
        },
        '&:active': {
          background: '$secondary-active',
        },
        '&:focus': {
          boxShadow: '0px 0px 0px 3px rgba(213, 228, 247, 1)',
        },
      },
      danger: {
        color: '$white',
        background: '$feedback-error-normal',
        '&:hover': {
          background: '$feedback-error-hover',
        },
        '&:active': {
          background: '$feedback-error-active',
        },
        '& svg': {
          fill: '$white',
          '& path': {
            fill: '$white',
          },
        },
        '&:focus': {
          boxShadow: '0px 0px 0px 3px rgba(248, 168, 158, 1)',
        },
      },
      success: {
        color: '$white',
        background: '$feedback-success-normal',
        '&:hover': {
          background: '$feedback-success-hover',
        },
        '&:active': {
          background: '$feedback-success-active',
        },
        '&:focus': {
          boxShadow: '0px 0px 0px 3px rgba(172, 229, 206, 1)',
        },
      },
      tertiary: {
        color: '$white',
        background: '$tertiary-normal',
        '&:hover': {
          background: '$tertiary-hover',
        },
        '&:active': {
          background: '$tertiary-active',
          '&:hover': {
            background: '$tertiary-active',
          },
        },
        '&:focus': {
          boxShadow: '0px 0px 0px 3px rgba(238, 219, 255, 1)',
        },
      },
    },
    isLoading: {
      true: {
        color: 'transparent !important',
        '& svg': {
          color: 'white !important',
          '& path': {
            fill: 'transparent',
          },
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
        minWidth: '100%',
      },
    },
    icon: {
      true: {},
    },
  },
}
