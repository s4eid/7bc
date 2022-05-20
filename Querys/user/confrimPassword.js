import { ApolloError } from "apollo-server-errors";
import { hash } from "bcrypt";
import { ERROR_CODES } from "../../errorCodes/errorCodes";

export const confrimPassword = async (user_id, password, pool) => {
  try {
    const changeOr = await pool.query(
      `select change_password,verified from users where user_id=$1`,
      [user_id]
    );
    if (
      changeOr.rows[0].change_password === true &&
      changeOr.rows[0].verified === true
    ) {
      const _password = await hash(password, 10);
      await pool.query("update users SET password=$1 WHERE user_id=$2", [
        _password,
        user_id,
      ]);
      await pool.query(`update users set change_password=$1 where user_id=$2`, [
        false,
        user_id,
      ]);
      return "done";
    } else {
      return new ApolloError("Password Error!", ERROR_CODES.PASSWORD_CHANGE);
    }
  } catch (error) {
    return new ApolloError("Password Error!", ERROR_CODES.PASSWORD_CHANGE);
  }
};
