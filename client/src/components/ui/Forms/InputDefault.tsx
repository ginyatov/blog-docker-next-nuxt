import { Box, Input, InputProps, Text } from '@chakra-ui/react'
import { useField, ErrorMessage } from 'formik'
import React from 'react'

type Props = {
  name: string
  label?: string
} & InputProps

export const InputDefault = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props as any)

  return (
    <Box w="100%">
      {label && (
        <Text
          fontSize="14px"
          color={meta.error && meta.touched ? 'red.400' : props.colorScheme}
          lineHeight="16px"
          fontWeight="600"
          mb="8px">
          {label}
        </Text>
      )}

      <Input isInvalid={!!meta.error && meta.touched} {...field} {...props} />
      <Box color="red.400" mt="3px" fontSize="14px" fontWeight="bold">
        <ErrorMessage name={field.name} />
      </Box>
    </Box>
  )
}
