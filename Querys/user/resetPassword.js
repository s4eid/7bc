import sendGrid from "../../emailConfig";
import jwt from "jsonwebtoken";
import { ApolloError } from "apollo-server-errors";
import { ERROR_CODES } from "../../errorCodes/errorCodes";

export const resetPassword = async (email, pool) => {
  try {
    const user = await pool.query(
      `select user_id,verified from users where email=$1`,
      [email]
    );
    if (user.rowCount !== 0 && user.rows[0].verified == true) {
      const user_id = user.rows[0].user_id;
      const token = jwt.sign({ user_id }, process.env.PASSWORD_CONFRIM_SEC, {
        expiresIn: "1h",
      });
      const url = `${process.env.URL}/api/reset_password/${token}`;
      const message = {
        to: email,
        from: {
          email: "saeid.noormohammad@gmail.com",
          name: "saeid noormohammad",
        },
        subject: "To Reset Your Password Click The Link Below",
        html: `Reset Your Password:<a href="${url}">${url}</a>`,
      };
      await sendGrid.send(message);
      return email;
    }
    return new ApolloError({
      message: "Password Error!",
      code: ERROR_CODES.PASSWORD_CHANGE,
    });
  } catch (error) {
    console.log(error);
  }
};
