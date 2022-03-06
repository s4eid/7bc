import jwt from "jsonwebtoken";
import { pool } from "../../../../db/index";

export default async function handlre(req, res) {
  try {
    const { verify } = req.query;
    const { user_id } = jwt.verify(verify, process.env.EMAIL_CONFRIM_SEC);
    await pool.query("UPDATE users SET verified=$1 WHERE user_id=$2", [
      true,
      user_id,
    ]);
    return res.redirect(`${process.env.URL}/login`);
  } catch (error) {
    console.log(error);
  }
}
