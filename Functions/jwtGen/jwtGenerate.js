import { sign } from "jsonwebtoken";

export const jwtGenerate = async (email, full_name, user_id, phone_number) => {
  const accessToken = await sign(
    { email, full_name, user_id, phone_number },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1h" }
  );
  const refreshToken = await sign(
    { email, full_name, user_id, phone_number },
    process.env.REFRESH_TOKEN,
    { expiresIn: "1d" }
  );
  return { accessToken, refreshToken };
};
