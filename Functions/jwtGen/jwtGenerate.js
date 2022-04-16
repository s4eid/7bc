import { sign } from "jsonwebtoken";

export const jwtGenerate = async (email, name, user_id) => {
  const accessToken = await sign(
    { email, name, user_id },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1h" }
  );
  const refreshToken = await sign(
    { email, name, user_id },
    process.env.REFRESH_TOKEN,
    { expiresIn: "1d" }
  );
  return { accessToken, refreshToken };
};
