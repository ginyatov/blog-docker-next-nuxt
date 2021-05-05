export const Input = {
  Input: {
    sizes: {
      lg: {
        field: {
          fontSize: '20px',
          fontWeight: '600',
          pl: '8px',
          h: '48px',
        },
      },
    },
    variants: {
      outline: {
        field: {
          borderRadius: '0',
          border: '2px solid',
          _disabled: {
            borderColor: 'grey.400',
            _hover: {
              borderColor: 'grey.400',
            },
          },
          _focus: {
            borderColor: 'blue.400',
            boxShadow: 'none',
          },
          _hover: {
            borderColor: 'blue.400',
          },
        },
      },
    },
    defaultProps: {
      size: 'lg',
      variant: 'outline',
    },
  },
}
