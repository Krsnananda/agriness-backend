import express from "express"
import { get } from "lodash";
import { validatePassword } from "../service/user";
import { findSessions } from "../service/session";

export async function createUserSessionHandler(req: express.Request, res: express.Response) {
  // validate the email and password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

}

export async function getUserSessionsHandler(req: express.Request, res: express.Response) {
  const userId = get(req, "user._id");

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}