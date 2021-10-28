import { Express, Request, Response } from "express";
import { validateRequest, requiresUser } from './middleware'
import { createUserHandler } from "./controller/user";
import { getUserSessionsHandler } from "./controller/session";
import { createUserSchema } from "./schema/user";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  // Delete user
  app.delete("/api/sessions", requiresUser);

  // Get the user's sessions
  app.get("/api/sessions", requiresUser, getUserSessionsHandler);

}