import React from "react";
import dynamic from "next/dynamic";

const Form = dynamic(
  () =>
    import(
      "@components/noSSRComponents/Auth/Registration/FormRegistration.tsx"
    ),
  {
    ssr: false,
  }
);

export default function Registration() {
  return <Form />;
}
export async function getStaticProps() {
  return { props: { layout: "sessions" } };
}
