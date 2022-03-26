export const getUserAddress = async (user_id, pool) => {
  try {
    const data = await pool.query(
      `SELECT * FROM user_address WHERE user_id=$1`,
      [user_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
