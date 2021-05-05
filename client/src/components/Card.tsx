import { Box, Heading, Text, Link as LinkChackra } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MotionBox } from "@utils/MotionBox";

const cardStyles = {
  wrapper: {
    display: "flex",
    pos: "relative" as "relative",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    boxShadow:
      "0px 1px 3px 0px rgb(142 142 142 / 20%), 0px 1px 1px 0px rgb(243 243 243 / 14%), 0px 2px 1px -1px rgb(204 204 204 / 12%)",
  },
  fullLink: {
    pos: "absolute" as "absolute",
    w: "100%",
    h: "100%",
    zIndex: 1,
    left: 0,
    top: 0,
  },
  imageBox: {
    pos: "relative" as "relative",
    h: 280,
    w: 300,
    flexShrink: 0,
    overflow: "hidden",
  },
};

export default function Card() {
  return (
    <MotionBox
      {...cardStyles.wrapper}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Link href="/posts/test-post">
        <LinkChackra as="a" href="/post/test-post" {...cardStyles.fullLink} />
      </Link>
      <Box {...cardStyles.imageBox}>
        <Image
          src="/dove.jpg"
          alt="Picture of the author"
          layout="fixed"
          objectFit="cover"
          width={300}
          height={300}
        />
      </Box>
      <Box p="18px">
        <Heading as="h2" size="md">
          Красивейший заголовок asda dsa dasdas
        </Heading>
        <Text fontSize="12px" my="6px">
          16.02.2021
        </Text>
        <Text lineHeight="28px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          asperiores aspernatur iste minima molestiae, obcaecati qui totam velit
          voluptas?
        </Text>
      </Box>
    </MotionBox>
  );
}
