import React, { useContext } from "react";
import { Box, Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useCustomToast } from "@hooks/useCustomToast";
import { InputDefault } from "@ui/Forms/InputDefault";
import { InputPassword } from "@ui/Forms/InputPassword";
import * as Yup from "yup";
import api from "@api/index";
import FormHeader from "../components/FormHeader";
import { Store } from "@store/store";
import { MotionBox } from "@utils/MotionBox";
import animates from "@animates/index";

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Невалидный e-mail")
    .max(254, "Не больше 255 символов")
    .required("Обязательное поле"),
  password1: Yup.string()
    .min(8, "Пароль должен содержать как минимум 8 символов.")
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      "Пароль должен содержать цифры, строчные латинские буквы, прописные латинские буквы."
    )
    .required("Обязательное поле"),
  password2: Yup.string()
    .when("password1", {
      is: (val: string) => val && val.length > 0,
      then: Yup.string().oneOf([Yup.ref("password1")], "Пароли не совпадают"),
    })
    .min(8, "Пароль должен содержать как минимум 8 символов.")
    .required("Обязательное поле"),
});

const RegistrationForm = () => {
  const { auth, user } = useContext(Store);
  const toast = useCustomToast();
  return (
    <MotionBox {...animates.slideRightToLeft}>
      <FormHeader
        title="Регистрация"
        link={{
          name: "Уже есть аккаунт?",
          href: "/auth/login",
        }}
      />

      <Formik
        initialValues={{
          email: "",
          password1: "",
          password2: "",
        }}
        validationSchema={Schema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await api.auth.registration(values);

            const user = await api.users.profile(response.data.access_token);

            console.log(user);
          } catch (error) {
            console.log(error.response, error.message);
            toast({
              text: error.response.data.message,
              type: "error",
            });
          }

          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, isValid, dirty }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={"20px"} align="stretch">
              <InputDefault
                name="email"
                type="email"
                label="E-mail"
                autoComplete="username"
              />
              <InputPassword
                name="password1"
                label="Пароль"
                autoComplete="current-password"
              />
              <InputPassword
                name="password2"
                label="Повторите пароль"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={!(isValid && dirty)}
                borderRadius="20px"
                colorScheme="purple"
              >
                Зарегистрироваться
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </MotionBox>
  );
};

export default RegistrationForm;
