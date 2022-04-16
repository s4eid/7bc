import Cookies from "js-cookie";
import { signOut } from "next-auth/react";

export default async (router) => {
  await signOut("google");
  Cookies.remove("refreshToken");
  Cookies.remove("accessToken");
  router.reload();
};
