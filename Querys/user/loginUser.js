import { ApolloError } from "apollo-server-errors";
import { compare } from "bcrypt";
import {
  jwtGenerate,
  jwtGenerateAccess,
} from "../../Functions/jwtGen/jwtGenerate";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import { ERROR_CODES } from "../../errorCodes/errorCodes";

export const loginUser = async (email, password, res, pool) => {
  const exist = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  if (!exist.rows[0]) {
    return new ApolloError("Login Failed!", ERROR_CODES.LOGIN);
  }
  if (exist.rows[0].verified === false) {
    return new ApolloError("Account Is Not Verified Yet!", ERROR_CODES.VERIFI);
  }
  const _password = exist.rows[0].password;
  const confrimPass = await compare(password, _password);
  if (confrimPass === false) {
    return new ApolloError("Login Failed!", ERROR_CODES.LOGIN);
  }
  const name = exist.rows[0].name;
  const user_id = exist.rows[0].user_id;
  try {
    const refresh = await jwt.verify(
      exist.rows[0].refresh_token,
      process.env.REFRESH_TOKEN
    );
    const { accessToken } = await jwtGenerateAccess(email, name, user_id);
    const refreshC = cookie.serialize(
      "refreshToken",
      exist.rows[0].refresh_token,
      {
        secure: process.env.NODE_ENV === "production",
        path: "/",
        // sameSite: "lax",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
      }
    );
    const accessC = cookie.serialize("accessToken", accessToken, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60,
    });
    res.setHeader("Set-Cookie", [refreshC, accessC]);
    return exist.rows[0];
  } catch (error) {
    const { accessToken, refreshToken } = await jwtGenerate(
      email,
      name,
      user_id
    );
    await pool
      .query("UPDATE users SET refresh_token=$1 WHERE user_id=$2", [
        refreshToken,
        user_id,
      ])
      .then(() => {
        const refreshC = cookie.serialize("refreshToken", refreshToken, {
          secure: process.env.NODE_ENV === "production",
          path: "/",
          // sameSite: "lax",
          sameSite: "strict",
          maxAge: 60 * 60 * 24,
        });
        const accessC = cookie.serialize("accessToken", accessToken, {
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 60,
        });
        res.setHeader("Set-Cookie", [refreshC, accessC]);
        return exist.rows[0];
      })
      .catch((error) => {
        return new ApolloError("Login Failed!", ERROR_CODES.LOGIN);
      });
  }
};
