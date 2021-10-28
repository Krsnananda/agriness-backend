import { LeanDocument, FilterQuery } from "mongoose";
import { decode } from "../utils/jwt";
import Session, { SessionDocument } from "../model/session";
import { UserDocument } from "../model/user";
import { get } from "lodash";
import { findUser } from "./user";

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

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  // Decode the refresh token
  const { decoded } = decode(refreshToken);

  if (!decoded || !get(decoded, "_id")) return false;

  // Get the session
  const session = await Session.findById(get(decoded, "_id"));

  // Make sure the session is still valid
  if (!session || !session?.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = createAccessToken({ user, session });

  return accessToken;
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return Session.find(query).lean();
}