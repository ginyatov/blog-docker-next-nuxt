export const Checkbox = {
  Checkbox: {
    sizes: {
      lg: {
        control: {
          w: '20px',
          h: '20px',
        },
        label: {
          ml: '8px',
          fontSize: '16px',
          lineHeight: '1',
          fontWeight: '600',
        },
        icon: {
          fontSize: '0',
        },
      },
    },
    baseStyle: {
      control: {
        borderRadius: '0',
        border: '2px solid',
        borderColor: 'black.400',
        _focus: {
          boxShadow: 'none',
        },
        _hover: {
          borderColor: 'black.400',
          bg: 'white',
        },
        position: 'relative',
        _checked: {
          borderColor: 'black.400',
          bg: 'white',
          _before: {
            content: '""',
            position: 'absolute',
            width: '12px',
            height: '12px',
            bg: 'blue.400',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          },
        },
      },
      label: {
        alignSelf: 'flex-end',
        _hover: {
          color: 'blue.400',
        },
      },
    },

    defaultProps: {
      size: 'lg',
    },
  },
}
