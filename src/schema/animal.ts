import { object, string, number } from "yup";

const payload = {
  body: object({
    id: string().required("Id é obrigatório"),
    nome: string().required("Nome é obrigatório"),
    tipoAnimal: string().required("Tipo de animal é obrigatório"),
    statusAnimal: number().required("Status do animal é obrigatório"),
    localizacao: string().required("Localização é obrigatória"),
    dataNascimento: string().required("Data de nascimento do animal é obrigatório"),
    entradaPlantel: string().required("Data de entrada do plantel é obrigatório"),
    pesoCompra: number().required("Peso é obrigatório"),
    raca: string().required("Raça é obrigatória"),
    codigoRastreamento: string().required("Còdigo de rastreamento é obrigatório"),
    faseProducao: object({
      sigla: string().required("Sigla da fase de produção é obrigatória"),
      descricao: string().required("Descrição da fase de produção é obrigatória"),
    }),
    tipoGranja: object({
      sigla: string().required("Sigla do tipo de granja é obrigatória"),
      descricao: string().required("Descrição do tipo de granja é obrigatória"),
    })
  }),
};

const params = {
  params: object({
    id: string().required("Id é obrigatório"),
  }),
};

export const updateAnimalSchema = object({
  ...params,
  ...payload,
});

export const deleteAnimalSchema = object({
  ...params,
});