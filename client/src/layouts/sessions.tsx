import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { Store } from "@store/store";
import Redirect from "@components/Redirect";
import { AnimatePresence } from "framer-motion";

const SessionsLayout = (props) => {
  const { auth } = useContext(Store);

  if (auth.isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <Box
      display="flex"
      backgroundImage="linear-gradient(-45deg, rgb(107, 81, 153) 0%, rgb(107, 81, 153) 33%, rgb(0, 120, 49) 100%)"
      backgroundAttachment="fixed"
      justifyContent="flex-end"
      minH="100vh"
    >
      <Box
        w="100%"
        h="100%"
        pos="fixed"
        bg="url('/bgLines.svg')"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        bgAttachment="fixed"
      />
      <Box
        pos="relative"
        backgroundColor="rgba(31,31,31,0.7)"
        p="24px"
        overflow="hidden"
        color="white"
        maxW="432px"
        w="100%"
      >
        <AnimatePresence exitBeforeEnter>{props.children}</AnimatePresence>
      </Box>
    </Box>
  );
};

export default SessionsLayout;
