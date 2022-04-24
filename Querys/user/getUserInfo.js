export const getUserInfo = async (user_id, pool) => {
  try {
    const data = await pool.query(
      `SELECT u.address,u.country,u.city,u.area,u.zip_code,u.ip,u.phone_number,owner,card_number,expire_m,expire_y,cvv
       FROM user_address u LEFT JOIN user_payment p ON u.user_id=p.user_id WHERE u.user_id=$1`,
      [user_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
