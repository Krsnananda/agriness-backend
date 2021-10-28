import { object, string, ref } from "yup";

export const createUserSchema = object({
  body: object({
    name: string().required("Nome é obrigatório"),
    password: string()
      .required("Senha é obrigatória")
      .min(6, "Senha muito curta - deve ter no mínimo 6 caracteres")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Senha deve conter apenas letras, números, traço ou ponto"),
    passwordConfirmation: string().oneOf(
      [ref("password"), null],
      "As senhas devem coincidir"
    ),
    email: string()
      .email("Email precisa ser válido")
      .required("Email é obrigatório"),
  }),
});

export const createUserSessionSchema = object({
  body: object({
    password: string()
      .required("Senha é obrigatória")
      .min(6, "Senha muito curta - deve ter no mínimo 6 caracteres")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Senha deve conter apenas letras, números, traço ou ponto"),

    email: string()
      .email("Precisa ser um email válido")
      .required("Email é obrigatório"),
  }),
});