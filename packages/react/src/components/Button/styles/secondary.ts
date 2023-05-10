export const secondary = [
  {
    color: 'secondary',
    variant: 'outlined',
    css: {
      '&:hover': {
        background: 'rgba(70, 111, 135, 0.08) !important',
      },
      '& svg': {
        fill: '$secondary-normal',
      },
      color: '$secondary-normal',
      '&:not(:disabled):not(:active):hover': {
        color: '$secondary-hover',
        '& svg': {
          fill: '$secondary-hover',
        },
      },
      '&:active': {
        color: '$secondary-dark-active',
        '& svg': {
          fill: '$secondary-active',
        },
      },
    },
  },

  {
    color: 'secondary',
    variant: 'text',
    css: {
      '&:hover': {
        background: 'rgba(70, 111, 135, 0.08) !important',
      },
      '& svg': {
        fill: '$secondary-normal',
        '& path': {
          fill: '$secondary-normal',
        },
      },
      color: '$secondary-normal',
      '&:not(:disabled):not(:active):hover': {
        color: '$secondary-hover',
        '& svg': {
          fill: '$secondary-hover',
          '& path': {
            fill: '$secondary-hover',
          },
        },
      },
      '&:active': {
        color: '$secondary-dark-active',
        background: 'rgba(255, 255, 255, 0.16) !important',
        '& svg': {
          fill: '$secondary-dark-active',
          '& path': {
            fill: '$secondary-dark-active',
          },
        },
      },
    },
  },
  {
    isLoading: true,
    variant: 'outlined',
    color: 'secondary',
    css: {
      borderColor: '$secondary-normal',
      '& svg': {
        color: '$secondary-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
    },
  },
  {
    variant: 'text',
    color: 'secondary',
    css: {
      '& svg': {
        color: '$secondary-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
    },
  },
]
