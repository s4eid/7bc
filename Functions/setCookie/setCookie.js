import cookie from "cookie";
export const setCookie = async (token, res) => {
  console.log(token);
  let option = {
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60,
  };
  try {
    return res.setHeader(
      "Set-Cookie",
      cookie.serialize("accessToken", token, option)
    );
  } catch (error) {
    console.log(error);
  }
};
