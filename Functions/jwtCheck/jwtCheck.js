import jwt from "jsonwebtoken";
import { setCookie } from "../setCookie/setCookie";
export const jwtCheck = async (token, pool, res) => {
  const accessToken = token.accessToken;
  const refreshToken = token.refreshToken;
  if (accessToken) {
    try {
      const user = await jwt.verify(accessToken, process.env.ACCESS_TOKEN);
      return user;
    } catch (error) {
      if (refreshToken) {
        const isValid = await jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN
        );
        const email = isValid.email;
        const id = isValid.user_id;
        const name = isValid.name;
        const data = await pool.query(
          `SELECT refresh_token FROM users WHERE user_id=$1`,
          [id]
        );
        const refreshTokenDb = data.rows[0].refresh_token;
        if (refreshToken == refreshTokenDb) {
          const newAccessToken = await jwt.sign(
            {
              name,
              email,
              user_id: id,
            },
            process.env.ACCESS_TOKEN,
            { expiresIn: "1h" }
          );
          await setCookie(newAccessToken, res);
          return isValid;
        } else {
          return null;
        }
      }
      return null;
    }
  } else {
    try {
      if (refreshToken) {
        const isValid = await jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN
        );
        const email = isValid.email;
        const id = isValid.user_id;
        const name = isValid.name;
        const data = await pool.query(
          `SELECT refresh_token FROM users WHERE user_id=$1`,
          [id]
        );
        const refreshTokenDb = data.rows[0].refresh_token;
        if (refreshToken == refreshTokenDb) {
          const newAccessToken = await jwt.sign(
            {
              name,
              email,
              user_id: id,
            },
            process.env.ACCESS_TOKEN,
            { expiresIn: "1h" }
          );
          await setCookie(newAccessToken, res);
          return isValid;
        } else {
          return null;
        }
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
