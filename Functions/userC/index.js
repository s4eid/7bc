import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { getSession } from "next-auth/react";

export const getUser = async (name) => {
  const cookie = Cookies.get(name);
  if (!cookie) {
    const session = await getSession();
    return session.user;
  }
  const data = await JSON.stringify(cookie);
  const user = await jwt_decode(data);
  return user;
};

export const getUser_server = async (token, session) => {
  if (!token) {
    return session;
  }
  const data = await JSON.stringify(token);
  const user = await jwt_decode(data);
  return user;
};
