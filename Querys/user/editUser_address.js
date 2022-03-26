export const editUser_address = async (
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
    const data = await pool.query(
      "UPDATE user_address SET address=$1,country=$2,city=$3,area=$4,zip_code=$5,ip=$6 WHERE user_id=$7 RETURNING *",
      [address, country, city, area, zip_code, ip, user_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
