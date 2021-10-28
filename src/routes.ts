import { Express, Request, Response } from "express";
import { validateRequest, requiresUser } from './middleware'
import { createUserHandler } from "./controller/user";
import { getUserSessionsHandler, createUserSessionHandler, invalidateUserSessionHandler } from "./controller/session";
import { updateAnimalHandler, getAnimalHandler, getAllAnimalsHandler, deleteAnimalHandler } from "./controller/animal";
import { createUserSchema, createUserSessionSchema } from "./schema/user";
import { updateAnimalSchema, deleteAnimalSchema } from "./schema/animal";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register user
  app.post("/api/user", validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post(
    "/api/login",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // Logout
  app.delete("/api/logout", requiresUser, invalidateUserSessionHandler);

  // Get the user's sessions
  app.get("/api/sessions", requiresUser, getUserSessionsHandler);

  // Update an animal
  app.put("/api/animal/:id", validateRequest(updateAnimalSchema), updateAnimalHandler);

  // Get an animal
  app.get("/api/animal/:id", getAnimalHandler);

  // Get all  animals
  app.get("/api/animal", getAllAnimalsHandler);

  // Delete an animal
  app.delete("/api/animal/:id", validateRequest(deleteAnimalSchema), deleteAnimalHandler);
}