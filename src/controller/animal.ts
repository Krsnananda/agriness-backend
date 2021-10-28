import { Request, Response } from "express";
import { get } from "lodash";
import {
  findAll,
  findAnimal,
  findAndUpdate,
  deleteAnimal,
} from "../service/animal";

export async function updateAnimalHandler(req: Request, res: Response) {
  const id = get(req, "params.id");
  const update = req.body;

  const animal = await findAnimal({ id });

  if (!animal) {
    return res.sendStatus(404);
  }

  const updatedAnimal = await findAndUpdate({ id }, update, { new: true });

  return res.send(updatedAnimal);
}

export async function getAllAnimalsHandler(req: Request, res: Response) {
  const animals = await findAll();

  if (!animals) {
    return res.sendStatus(404);
  }

  return res.send(animals);
}

export async function getAnimalHandler(req: Request, res: Response) {
  const id = get(req, "params.id");
  const animal = await findAnimal({ id });

  if (!animal) {
    return res.sendStatus(404);
  }

  return res.send(animal);
}

export async function deletAnimalHandler(req: Request, res: Response) {
  const id = get(req, "params.id");

  const animal = await findAnimal({ id });

  if (!animal) {
    return res.sendStatus(404);
  }

  await deleteAnimal({ id });

  return res.sendStatus(200);
}