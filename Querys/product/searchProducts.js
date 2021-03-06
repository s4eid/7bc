export const searchProducts = async (text, pool) => {
  try {
    const data = await pool.query(
      `
      select name,product_id,type, made from product where document @@ plainto_tsquery($1) order by ts_rank(document,plainto_tsquery($1)) limit 5
	    `,
      [text]
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
