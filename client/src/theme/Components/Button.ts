export const Button = {
  Button: {
    baseStyle: {
      borderRadius: '0',
      whiteSpace: 'normal',
      _focus: {
        boxShadow: 'none',
      },

      _disabled: {
        opacity: '1',
        bg: '#BDBDBD',
      },
    },
    variants: {
      ghost: {
        bg: 'transparent',
        padding: '0',
        _hover: {
          bg: 'transparent',
        },
        _active: {
          bg: 'transparent',
        },
      },
      solid: {
        bg: 'blue.400',
        padding: '0 12px',
        color: 'white',
        _hover: {
          bg: 'black.400',
          _disabled: {
            bg: 'grey.400',
          },
        },
        _active: {
          bg: 'black.400',
        },
      },
      outline: ({ colorScheme = 'black.400' }: { colorScheme: string }) => ({
        border: '2px solid',
        padding: '0 12px',
        borderColor: colorScheme,
        bg: 'none',
        color: colorScheme,
        _disabled: {
          bg: 'none',
          color: 'grey.400',
          borderColor: 'grey.400',
        },
        _hover: {
          color: 'blue.400',
          bg: 'none',
          borderColor: 'blue.400',
          _disabled: {
            bg: 'none',
            color: 'grey.400',
            borderColor: 'grey.400',
          },
        },
        _active: {
          bg: 'none',
          borderColor: 'blue.400',
        },
      }),
    },

    sizes: {
      xl: {
        h: '60px',
        fontSize: '20px',
      },
      lg: {
        h: '48px',
        fontSize: ['16px', '20px'],
      },
      md: {
        h: '36px',
        minW: '157px',
        fontSize: '20px',
      },
      xs: {
        h: '100%',
        minW: '100%',
        w: '100%',
      },
    },
    defaultProps: {
      variant: 'solid',
      size: 'lg',
    },
  },
}
