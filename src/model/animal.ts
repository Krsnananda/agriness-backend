import mongoose from "mongoose";

export interface AnimalDocument extends mongoose.Document {
  id: string
  nome: string
  tipoAnimal: string
  statusAnimal: number
  localizacao: string
  dataNascimento: string
  entradaPlantel: string
  pesoCompra: number
  raca: string
  codigoRastreamento: string
  faseProducao: {
    sigla: string,
    descricao: string
  }
  tipoGranja: {
    sigla: string
    descricao: string
  }
}

const AnimalSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    nome: { type: String, required: true },
    tipoAnimal: { type: String, required: true },
    statusAnimal: { type: Number, required: true },
    localizacao: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    entradaPlantel: { type: String, required: true },
    pesoCompra: { type: Number, required: true },
    raca: { type: String, required: true },
    codigoRastreamento: { type: String, required: true },
    faseProducao: {
      sigla: { type: String, required: true },
      descricao: { type: String, required: true }
    },
    tipoGranja: {
      sigla: { type: String, required: true },
      descricao: { type: String, required: true }
    }

  }
);

const Animal = mongoose.model<AnimalDocument>("Animal", AnimalSchema);

export default Animal;
