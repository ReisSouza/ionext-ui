export const tertiary = [
  {
    color: 'tertiary',
    variant: 'outlined',
    css: {
      '& svg': {
        fill: '$tertiary-normal',
        '& path': {
          fill: '$tertiary-normal',
        },
      },
      '&:hover': {
        background: 'rgba(10, 143, 220, 0.06) !important',
      },
      color: '$tertiary-normal',
      '&:not(:disabled):not(:active):hover': {
        color: '$tertiary-hover',
        '& svg': {
          fill: '$tertiary-hover',
        },
      },
      '&:active': {
        color: '$tertiary-active',
        '& svg': {
          fill: '$tertiary-active',
          '& path': {
            fill: '$tertiary-active',
          },
        },
      },
    },
  },
  {
    color: 'tertiary',
    variant: 'text',
    css: {
      color: '$tertiary-normal',
      '& svg': {
        fill: '$tertiary-normal',
        '& path': {
          fill: '$tertiary-normal',
        },
      },
      '&:not(:disabled):not(:active):hover': {
        color: '$tertiary-hover',
        background: 'rgba(10, 143, 220, 0.06) !important',
        '& svg': {
          fill: '$tertiary-hover',
          '& path': {
            fill: '$tertiary-hover',
          },
        },
      },
      '&:active': {
        color: '$tertiary-dark-active',
        background: 'rgba(255, 255, 255, 0.16) !important',
        '& svg': {
          fill: '$tertiary-active',
        },
      },
    },
  },
  {
    isLoading: true,
    variant: 'outlined',
    color: 'tertiary',
    css: {
      borderColor: '$tertiary-normal',
      '& svg': {
        color: '$tertiary-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
    },
  },
  {
    variant: 'text',
    color: 'tertiary',
    css: {
      '& svg': {
        color: '$tertiary-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
    },
  },
]
