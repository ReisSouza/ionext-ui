export const success = [
  {
    color: 'success',
    variant: 'outlined',
    css: {
      '& svg': {
        fill: '$feedback-success-normal',
        '& path': {
          fill: '$feedback-success-normal',
        },
      },
      color: '$feedback-success-normal',
      '&:not(:disabled):not(:active):hover': {
        color: '$feedback-success-hover',
        '& svg': {
          fill: '$feedback-success-hover',
          '& path': {
            fill: '$feedback-success-hover',
          },
        },
      },
      '&:active': {
        color: '$feedback-success-active',
        '& svg': {
          fill: '$feedback-success-active',
          '& path': {
            fill: '$feedback-success-active',
          },
        },
      },
    },
  },
  {
    color: 'success',
    variant: 'text',
    css: {
      color: '$feedback-success-normal',
      '& svg': {
        fill: '$feedback-success-normal',
      },
      '&:not(:disabled):not(:active):hover': {
        color: '$feedback-success-hover',
        '& svg': {
          fill: '$feedback-success-hover',
        },
      },
      '&:active': {
        background: 'rgba(255, 255, 255, 0.16) !important',
      },
    },
  },

  {
    isLoading: true,
    variant: 'outlined',
    color: 'success',
    css: {
      borderColor: '$feedback-success-normal',
      '& svg': {
        color: '$feedback-success-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
    },
  },

  {
    variant: 'text',
    color: 'success',
    css: {
      '& svg': {
        color: '$feedback-success-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
    },
  },
]
