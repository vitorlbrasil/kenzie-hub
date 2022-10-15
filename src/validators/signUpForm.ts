import * as yup from "yup";

export const signUpFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Formato de e-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
  passwordConfirmation: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Módulo obrigatório"),
});
