import { ApolloError } from "apollo-server-errors";
import sendGrid from "../../emailConfig";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (
  full_name,
  email,
  password,
  phone_number,
  pool
) => {
  try {
    const exist = await pool.query("SELECT user_id FROM users WHERE email=$1", [
      email,
    ]);
    if (exist.rows[0]) {
      return new ApolloError("User exist!");
    }
    const _password = await hash(password, 10);
    const data = await pool.query(
      "INSERT INTO users (full_name,email,password,phone_number) VALUES ($1,$2,$3,$4) RETURNING *",
      [full_name, email, _password, phone_number]
    );
    const user_id = data.rows[0].user_id;
    const token = await jwt.sign({ user_id }, process.env.EMAIL_CONFRIM_SEC, {
      expiresIn: "1h",
    });
    const url = `${process.env.URL}/api/email_confrim/${token}`;
    const message = {
      to: email,
      from: {
        email: "saeid.noormohammad@gmail.com",
        name: "saeid noormohammad",
      },
      subject: "Please Verify Your Email",
      html: `Click the link for verifying your account:<a href="${url}">${url}</a>`,
    };
    await sendGrid.send(message);
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
