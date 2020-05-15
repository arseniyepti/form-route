import * as Yup from "yup";

const validationSchemaAuthForm = Yup.object().shape({
  password: Yup.string().required("Поле не заполнено"),
  email: Yup.string().required("Поле не заполнено"),
});

const validationSchemaRegForm = Yup.object().shape({
  name: Yup.string().required("Поле не заполнено"),
  password: Yup.string().required("Поле не заполнено"),
  email: Yup.string().required("Поле не заполнено"),
});

export { validationSchemaRegForm, validationSchemaAuthForm };
