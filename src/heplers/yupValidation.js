import * as Yup from "yup";

const validationSchemaAuthForm = Yup.object().shape({
  password: Yup.string()
    .typeError("Неверный формат введенных данных")
    .max(40, "Не более 40 символов")
    .min(8, "Не менее 8 символов")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      "Пароль должен состоять из латинских букв и цифр, а также содержать хотя бы одну строчную, заглавную букву и цифру"
    )
    .required("Поле не заполнено"),
  email: Yup.string()
    .typeError("Неверный формат введенных данных")
    .email("Некорректный email адрес")
    .required("Поле не заполнено"),
});

const validationSchemaRegForm = Yup.object().shape({
  name: Yup.string()
    .typeError("Неверный формат введенных данных")
    .max(50, "Не более 50 символов")
    .required("Поле не заполнено"),
  password: Yup.string()
    .typeError("Неверный формат введенных данных")
    .max(40, "Не более 40 символов")
    .min(8, "Не менее 8 символов")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      "Пароль должен состоять из латинских букв и цифр, а также содержать хотя бы одну строчную, заглавную букву и цифру"
    )
    .required("Поле не заполнено"),
  email: Yup.string()
    .typeError("Неверный формат введенных данных")
    .email("Некорректный email адрес")
    .required("Поле не заполнено"),
});

export { validationSchemaRegForm, validationSchemaAuthForm };
