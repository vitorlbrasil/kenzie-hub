import * as yup from "yup";

export const addTechFormSchema = yup.object().shape({
  title: yup.string().required("Nome obrigatório"),
  status: yup.string().required("Status obrigatório"),
});
