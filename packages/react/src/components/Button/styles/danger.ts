export const danger = [
  {
    color: 'danger',
    variant: 'text',
    css: {
      '& svg': {
        fill: '$feedback-error-normal !important',
        '& path': {
          fill: '$feedback-error-normal !important',
        },
      },
      color: '$feedback-error-normal',

      '&:hover': {
        background: 'rgba(204, 57, 46, 0.08) !important',
      },
      '&:not(:disabled):not(:active):hover': {
        color: '$feedback-error-hover',
        '& svg': {
          fill: '$feedback-error-normal !important',
          '& path': {
            fill: '$feedback-error-normal !important',
          },
        },
      },
      '&:active': {
        background: 'rgba(255, 255, 255, 0.16) !important',
      },
    },
  },
  {
    color: 'danger',
    variant: 'outlined',
    css: {
      '& svg': {
        fill: '$feedback-error-normal !important',
        '& path': {
          fill: '$feedback-error-normal !important',
        },
      },
      color: '$feedback-error-normal',

      '&:hover': {
        background: 'rgba(204, 57, 46, 0.08) !important',
      },

      '&:not(:disabled):not(:active):hover': {
        color: '$feedback-error-hover',
        '& svg': {
          fill: '$feedback-error-normal !important',
          '& path': {
            fill: '$feedback-error-normal !important',
          },
        },
      },
      '&:active': {
        color: '$feedback-error-active',
        '& svg': {
          fill: '$feedback-error-active',
        },
      },
    },
  },
  {
    variant: 'text',
    color: 'danger',
    css: {
      '& svg': {
        color: '$feedback-error-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
    },
  },
  {
    isLoading: true,
    variant: 'outlined',
    color: 'danger',
    css: {
      borderColor: '$feedback-error-normal',
      '& svg': {
        color: '$feedback-error-normal !important',
        '& path': {
          fill: 'transparent !important',
        },
      },
    },
  },
]
