export const primary = [
  {
    color: 'primary',
    variant: 'outlined',
    css: {
      '& svg': {
        fill: '$primary-normal',
        '& path': {
          fill: '$primary-normal',
        },
      },
      '&:hover': {
        background: 'rgba(10, 143, 220, 0.06) !important',
      },
      color: '$primary-normal',
      '&:not(:disabled):not(:active):hover': {
        color: '$primary-hover',
        '& svg': {
          fill: '$primary-hover',
        },
      },
      '&:active': {
        color: '$primary-active',
        '& svg': {
          fill: '$primary-active',
          '& path': {
            fill: '$primary-active',
          },
        },
      },
    },
  },
  {
    color: 'primary',
    variant: 'text',
    css: {
      color: '$primary-normal',
      '& svg': {
        color: '$primary-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
      '&:not(:disabled):not(:active):hover': {
        color: '$primary-hover',
        background: 'rgba(10, 143, 220, 0.06) !important',
        '& svg': {
          fill: '$primary-hover',
          '& path': {
            fill: '$primary-hover',
          },
        },
      },
      '&:active': {
        color: '$primary-dark-active',
        background: 'rgba(255, 255, 255, 0.16) !important',
        '& svg': {
          fill: '$primary-active',
        },
      },
    },
  },
  {
    isLoading: true,
    variant: 'outlined',
    color: 'primary',
    css: {
      borderColor: '$primary-normal',
      '& svg': {
        color: '$primary-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
    },
  },
]
