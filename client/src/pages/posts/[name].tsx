import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Box>
      <Heading as="h1" size="lg" mb="18px">
        Красивейший заголовок asda dsa dasdas
      </Heading>
      <Text fontSize="14px">01.03.2020. Автор - Али</Text>

      <Box></Box>
    </Box>
  );
};

export default Post;
