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
    await pool.query(
      "INSERT INTO user_address (address,country,city,area,zip_code,ip,phone_number,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
      [address, country, city, area, zip_code, ip, phone_number, user_id]
    );
    return "done";
  } catch (error) {
    console.log(error);
  }
};
