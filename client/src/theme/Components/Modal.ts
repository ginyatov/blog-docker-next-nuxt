export const Modal = {
  Modal: {
    baseStyle: {
      body: {
        padding: ['20px', '70px'],
      },
      close: {
        mr: '50px',
      },
      dialog: {
        borderRadius: '0',
      },
    },
    sizes: {
      lg: {
        dialog: {
          maxW: '1040px',
        },
      },
      xl: {
        dialog: {
          maxW: '95%',
        },
      },
    },
    defaultProps: {
      size: 'lg',
    },
  },
}
