import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export const getUser = async (name) => {
  const cookie = Cookies.get(name);
  const data = await JSON.stringify(cookie);
  const user = await jwt_decode(data);
  return user;
};
