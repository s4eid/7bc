import jwt from "jsonwebtoken";
import { getSession } from "next-auth/react";
import { pool } from "../../../db";
import { ERROR_CODES } from "../../../errorCodes/errorCodes";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    if (session) {
      const user = await pool.query(`select p_html from users where email=$1`, [
        session.user.email,
      ]);
      const payHtml = user.rows[0].p_html;
      let payPage = Buffer.from(payHtml, "base64").toString("utf8");
      await pool.query(`update users set p_html=$1 where email=$2`, [
        null,
        session.user.email,
      ]);
      return res.send(payPage);
    }
    const token = req.cookies.accessToken;
    const decodeToken = await jwt.verify(token, process.env.ACCESS_TOKEN);
    const user = await pool.query(`select p_html from users where email=$1`, [
      decodeToken.email,
    ]);
    const payHtml = user.rows[0].p_html;
    let payPage = Buffer.from(payHtml, "base64").toString("utf8");
    await pool.query(`update users set p_html=$1 where email=$2`, [
      null,
      decodeToken.email,
    ]);
    return res.send(payPage);
  } catch (error) {
    return res.status(500).json({ error, code: ERROR_CODES.PAYMENT });
  }
}
