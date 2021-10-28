import express from "express"
import { validatePassword } from "../service/user";

export async function createUserSessionHandler(req: express.Request, res: express.Response) {
  // validate the email and password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

}