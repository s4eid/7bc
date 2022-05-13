import jwt from "jsonwebtoken";
import { pool } from "../../../../db";
export default async function handlre(req, res) {
  try {
    const { token } = req.query;
    //     const password = req.body.password;
    //     console.log(password);
    //     const _password = await hash(password, 10);
    //     await pool.query("UPDATE users SET password=$1 WHERE user_id=$2", [
    //       _password,
    //       user_id,
    //     ]);
    const { user_id } = jwt.verify(token, process.env.PASSWORD_CONFRIM_SEC);
    await pool.query(`update users set change_password=$1 where user_id=$2`, [
      true,
      user_id,
    ]);
    return res.redirect(`${process.env.URL}/reset_password/${user_id}`);
  } catch (error) {
    return res.redirect(`${process.env.URL}`);
  }
}
