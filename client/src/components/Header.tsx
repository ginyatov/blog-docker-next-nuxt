import { Box, HStack, Icon, Link as LinkChackra } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const navigations = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];

const HeaderStyle = {
  wrapper: {
    pos: "relative" as "relative",
    zIndex: "1",
    py: "18px",
    boxShadow:
      "0px 1px 8px 0px rgb(80 80 80 / 20%), 0px 3px 4px 0px rgb(80 80 80 / 14%), 0px 3px 3px -2px rgb(80 80 80 / 12%);",
    transition: "padding 0.3s ease;",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
};

const Header = () => {
  return (
    <Box {...HeaderStyle.wrapper}>
      <HStack spacing="24px">
        {navigations.map((link, index) => (
          <Link href={link.href} key={index}>
            <LinkChackra as="a" href={link.href}>
              {link.name}
            </LinkChackra>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default Header;
