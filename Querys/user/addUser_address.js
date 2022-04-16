export const addUser_address = async (
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
      "INSERT INTO user_address (address,country,city,area,zip_code,ip,phone_number,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [address, country, city, area, zip_code, ip, phone_number, user_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
