import { ApolloError } from "apollo-server-errors";

export const addUser_address = async (
  address,
  country,
  city,
  area,
  zip_code,
  ip,
  user_id,
  pool
) => {
  try {
    const exist = await pool.query(
      `SELECT user_id FROM user_address WHERE user_id=$1`,
      [user_id]
    );
    if (!exist.rows[0]) {
      const data = await pool.query(
        "INSERT INTO user_address (address,country,city,area,zip_code,ip,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
        [address, country, city, area, zip_code, ip, user_id]
      );
      return data.rows[0];
    } else {
      return new ApolloError("Address infos are exist!!!");
    }
  } catch (error) {
    console.log(error);
  }
};
