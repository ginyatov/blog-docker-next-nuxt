import React from "react";
import dynamic from "next/dynamic";
import { Skeleton, Stack } from "@chakra-ui/react";

const Form = dynamic(
  () => import("@components/noSSRComponents/Auth/Login/FormLogin"),
  {
    ssr: false,
    loading: () => (
      <Stack spacing="20px">
        <Skeleton height="40px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
      </Stack>
    ),
  }
);

export default function Admin() {
  return <div>Админочка</div>;
}
export async function getStaticProps() {
  return { props: { layout: "admin" } };
}
