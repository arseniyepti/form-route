import * as Yup from "yup";

const validationSchemaAuthForm = Yup.object().shape({
  password: Yup.string().required("Поле не заполнено"),
  email: Yup.string()
    .required("Поле не заполнено")
    .typeError("Неверный формат введенных данных"),
});

const validationSchemaRegForm = Yup.object().shape({
  name: Yup.string().required("Поле не заполнено"),
  password: Yup.string().required("Поле не заполнено"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли не совпадают")
    .required("Поле не заполнено"),
  email: Yup.string()
    .required("Поле не заполнено")
    .typeError("Неверный формат введенных данных"),
});

const validationSchemaAddArticle = Yup.object().shape({
  title: Yup.string().required("Поле не заполнено"),
  description: Yup.string().required("Поле не заполнено"),
  body: Yup.string().required("Поле не заполнено"),
});

export {
  validationSchemaRegForm,
  validationSchemaAuthForm,
  validationSchemaAddArticle,
};
