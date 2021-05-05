import React from "react";
import dynamic from "next/dynamic";

const Form = dynamic(
  () => import("@components/noSSRComponents/Auth/Login/FormLogin"),
  {
    ssr: false,
  }
);
export default function Login() {
  return <Form />;
}

export async function getStaticProps() {
  return { props: { layout: "sessions" } };
}
