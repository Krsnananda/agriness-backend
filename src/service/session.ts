import { LeanDocument, FilterQuery, UpdateQuery } from "mongoose";
import config from "config";
import Session, { SessionDocument } from "../model/session";
import { UserDocument } from "../model/user";

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent });

  return session.toJSON();
}

export function createAccessToken({
  user,
  session,
}: {
  user:
  // Allows a user object that has had the password omitted
  | Omit<UserDocument, "password">
  // Allows a user object that has been found with .lean()
  | LeanDocument<Omit<UserDocument, "password">>;
  session:
  // Allows a session object that has had the password omitted
  | Omit<SessionDocument, "password">
  // Allows a session object that has been found with .lean()
  | LeanDocument<Omit<SessionDocument, "password">>;
}) {

}