export const setCookie = async (token, res) => {
  try {
    res.cookie("access_token", token, {
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
    });
  } catch (error) {
    console.log(error);
  }
};
