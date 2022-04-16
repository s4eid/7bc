export const editUser_address = async (
  address,
  country,
  city,
  area,
  zip_code,
  ip,
  phone_number,
  user_id,
  pool
) => {
  try {
    const data = await pool.query(
      "UPDATE user_address SET address=$1,country=$2,city=$3,area=$4,zip_code=$5,ip=$6,phone_number=$7 WHERE user_id=$8 RETURNING *",
      [address, country, city, area, zip_code, ip, phone_number, user_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
