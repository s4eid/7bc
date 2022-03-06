import { sign } from "jsonwebtoken";

export const jwtGenerate = async (email, full_name, user_id) => {
  const accessToken = await sign(
    { email, full_name, user_id },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1m" }
  );
  const refreshToken = await sign(
    { email, full_name, user_id },
    process.env.REFRESH_TOKEN,
    { expiresIn: "1d" }
  );
  return { accessToken, refreshToken };
};
