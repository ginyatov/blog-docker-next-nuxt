import Head from "next/head";
import Header from "@components/Header";
import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";

const DefaultLayout = (props) => (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <Box bgColor="gray.50" minH="100vh">
      <Header />
      <Box maxW="1140px" mx="auto" mt="32px">
        <HStack spacing="24px" alignItems={"flex-start"}>
          <Box flexGrow={1}>{props.children}</Box>
          <Box as="aside" maxW="360px" w="100%">
            Aside
          </Box>
        </HStack>
      </Box>
    </Box>
  </>
);

export default DefaultLayout;
