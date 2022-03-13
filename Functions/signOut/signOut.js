import Cookies from "js-cookie";

export default (router) => {
  Cookies.remove("refreshToken");
  Cookies.remove("accessToken");
  router.reload();
};
