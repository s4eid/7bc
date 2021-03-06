import { ApolloError } from "apollo-server-errors";
import sendGrid from "../../emailConfig";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { ERROR_CODES } from "../../errorCodes/errorCodes";
import { verifi } from "../../emailTemplates/VerifiAccount";

export const registerUser = async (name, email, password, token, pool) => {
  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      {
        method: "POST",
      }
    );
    const _data = await response.json();
    if (!_data.success) {
      return new ApolloError("Register Failed!", ERROR_CODES.REGISTER);
    }
    const exist = await pool.query("SELECT user_id FROM users WHERE email=$1", [
      email,
    ]);
    if (exist.rows[0]) {
      return new ApolloError("Register Failed!", ERROR_CODES.REGISTER);
    }
    const _password = await hash(password, 10);
    const data = await pool.query(
      "INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, _password]
    );
    const user_id = data.rows[0].user_id;
    const _token = await jwt.sign({ user_id }, process.env.EMAIL_CONFRIM_SEC, {
      expiresIn: "1h",
    });
    const url = `${process.env.URLL}/api/email_confrim/${_token}`;
    const page = verifi(url);
    const message = {
      to: email,
      from: {
        email: "saeid.noormohammad@gmail.com",
        name: "saeid noormohammad",
      },
      subject: "Please Verify Your Email",
      html: `${page}`,
    };
    await sendGrid.send(message);
    return data.rows[0];
  } catch (error) {
    return new ApolloError("Register Failed!", ERROR_CODES.REGISTER);
  }
};
