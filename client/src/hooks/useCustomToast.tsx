import React, { useCallback, useRef } from "react";
import { Box, Icon, useToast } from "@chakra-ui/react";
import { RiCloseLine, RiErrorWarningLine } from "react-icons/ri";

interface Props {
  text: string;
  type: "info" | "warning" | "success" | "error";
}

const RenderTost = (props: Props & { closeAll: () => void }) => {
  const color = () => {
    switch (props.type) {
      case "success":
        return "blue.400";
      case "warning":
        return "red.400";
      case "error":
        return "red.600";

      default:
        return "blue.400";
    }
  };

  return (
    <Box
      d="flex"
      alignItems="center"
      color="white"
      p="15px 10px"
      bg={color()}
      pos="relative"
    >
      <Icon
        onClick={() => {
          props.closeAll();
        }}
        as={RiCloseLine}
        pos="absolute"
        top="2px"
        right="2px"
        w="18px"
        h="18px"
        left="auto"
        cursor="pointer"
      />
      <Icon as={RiErrorWarningLine} w="30px" h="30px" mr="10px" />
      <Box fontWeight="600" fontSize="18px">
        {props.text}
      </Box>
    </Box>
  );
};

export const useCustomToast = () => {
  const toast = useToast();
  const toastIdRef = useRef();

  const callToast = useCallback(
    (props: Props) => {
      toastIdRef.current = toast({
        render: () => <RenderTost {...props} closeAll={toast.closeAll} />,
        duration: 3000,
        isClosable: true,
      }) as any;
    },
    [toast]
  );

  return callToast;
};
