import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Animal, { AnimalDocument } from "../model/animal";

// Não tem create de animais no projeto
// export function createAnimal(input: DocumentDefinition<AnimalDocument>) {
//   return Animal.create(input);
// }

export function findAll() {
  return Animal.find()
}

export function findAnimal(
  query: FilterQuery<AnimalDocument>,
  options: QueryOptions = { lean: true }
) {
  return Animal.findOne(query, {}, options);
}

export function findAndUpdate(
  query: FilterQuery<AnimalDocument>,
  update: UpdateQuery<AnimalDocument>,
  options: QueryOptions
) {
  return Animal.findOneAndUpdate(query, update, options);
}

export function deleteAnimal(query: FilterQuery<AnimalDocument>) {
  return Animal.deleteOne(query);
}