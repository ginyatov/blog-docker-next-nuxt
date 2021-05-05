import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useCustomToast } from "@hooks/useCustomToast";
import { InputDefault } from "@ui/Forms/InputDefault";
import { InputPassword } from "@ui/Forms/InputPassword";
import { MotionBox } from "@utils/MotionBox";
import * as Yup from "yup";
import FormHeader from "../components/FormHeader";
import animates from "@animates/index";

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Невалидный e-mail")
    .max(254, "Не больше 255 символов")
    .required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
});

const FormLogin = () => {
  const toast = useCustomToast();
  return (
    <MotionBox {...animates.slideRightToLeft}>
      <FormHeader
        title="Ввойти"
        link={{
          name: "Создать новый аккаунт",
          href: "/auth/registration",
        }}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          /*try {
            const response = await api.auth.registration(values);

            console.log(response);
          } catch (error) {
            console.log(error);
            toast({
              text: "Ошибка на сервере. Повтори позже.",
              type: "error",
            });
          }*/

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
                name="password"
                label="Пароль"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={!(isValid && dirty)}
                borderRadius="20px"
                colorScheme="purple"
              >
                Ввойти
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </MotionBox>
  );
};

export default FormLogin;
