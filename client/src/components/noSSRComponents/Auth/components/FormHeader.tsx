import { Box, Heading, Icon, Link as LinkChackra } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import Logo from "@components/Logo";

type Props = {
  title: string;
  link: {
    name: string;
    href: string;
  };
};

export default function FormHeader({ title, link }: Props) {
  return (
    <>
      <Box
        mb="64px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />

        <Link href={link.href}>
          <LinkChackra
            as="a"
            href={link.href}
            fontSize="14px"
            display="flex"
            alignItems="center"
          >
            <Icon as={RiArrowRightLine} w="20px" h="20px" mr="10px" />
            {link.name}
          </LinkChackra>
        </Link>
      </Box>
      <Heading mb="20px" textAlign="center" color="purple.200">
        {title}
      </Heading>
    </>
  );
}
