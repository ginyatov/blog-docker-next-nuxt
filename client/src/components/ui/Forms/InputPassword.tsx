import React from 'react'
import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import { useField, ErrorMessage } from 'formik'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

type Props = {
  name: string
  label?: string
  helperText?: {
    fn?: () => void
    text: string
  }
} & InputProps

export const InputPassword = ({ label, helperText, ...props }: Props) => {
  const [show, setShow] = React.useState(false)
  const [field, meta] = useField(props as any)

  return (
    <Box w="100%">
      {label && (
        <Box
          d={helperText ? 'flex' : 'block'}
          fontSize="14px"
          lineHeight="16px"
          fontWeight="600"
          mb="8px"
          justifyContent="space-between"
          alignItems="center">
          <Text
            color={meta.error && meta.touched ? 'red.400' : props.colorScheme}>
            {label}
          </Text>
          {helperText && (
            <Box
              cursor="pointer"
              transition="0.2s"
              _hover={{ color: 'blue.400' }}
              onClick={helperText.fn}>
              {helperText.text}
            </Box>
          )}
        </Box>
      )}

      <InputGroup size="lg">
        <Input
          isInvalid={!!meta.error && meta.touched}
          type={show ? 'text' : 'password'}
          {...field}
          {...props}
        />
        <InputRightElement
          w="24px"
          p="0"
          mr="14px"
          _hover={{ color: 'blue.400' }}>
          <Button size="xs" variant="ghost" onClick={() => setShow(!show)}>
            {show ? (
              <Icon as={AiFillEye} cursor="pointer" />
            ) : (
              <Icon as={AiFillEyeInvisible} cursor="pointer" />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box color="red.400" mt="3px" fontSize="14px" fontWeight="bold">
        <ErrorMessage name={field.name} />
      </Box>
    </Box>
  )
}
