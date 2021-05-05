import React from "react";
import Head from "next/head";
import api from "@api/index";
import Image from "next/image";
import { useQuery } from "react-query";
import {
  Box,
  Heading,
  HStack,
  Link as LinkChackra,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { MotionBox } from "@utils/MotionBox";
import Card from "@components/Card";

const Home = (props) => {
  const { error, data, isLoading } = useQuery("users", api.articles.get, {
    initialData: props.users,
  });

  return (
    <div>
      <Head>
        <title>Ginyatov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack spacing="24px" flexGrow={1} alignItems={"flex-start"}>
        <Card />
        <Card />
        <Card />
      </VStack>
      <Box>
        {/* {data.map((user) => (
          <Heading key={user.id}>{user.email}</Heading>
        ))}*/}
      </Box>
    </div>
  );
};

/*
export async function getStaticProps() {
  const users = await api.users.getAll();
  return { props: { users } };
}
*/

export default Home;
