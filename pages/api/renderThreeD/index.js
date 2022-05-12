import jwt from "jsonwebtoken";
import { getSession } from "next-auth/react";
import { pool } from "../../../db";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    if (session) {
      const user = await pool.query(`select p_html from users where email=$1`, [
        session.user.email,
      ]);
      const payHtml = user.rows[0].p_html;
      let payPage = Buffer.from(payHtml, "base64").toString("utf8");
      res.send(payPage);
    }
    const token = req.cookies.refreshToken;
    const decodeToken = await jwt.verify(token, process.env.REFRESH_TOKEN);
    const user = await pool.query(`select p_html from users where email=$1`, [
      decodeToken.email,
    ]);
    const payHtml = user.rows[0].p_html;
    let payPage = Buffer.from(payHtml, "base64").toString("utf8");
    await pool.query(`update users set p_html=$1 where email=$2`, [
      null,
      decodeToken.email,
    ]);
    res.send(payPage);
  } catch (error) {
    res.status(500);
  }
}
