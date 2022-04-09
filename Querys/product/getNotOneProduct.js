export const getNotOneProduct = async (product_id, pool) => {
  try {
    const data = await pool.query(
      `
       SELECT * FROM product p 
       INNER JOIN product_details b ON p.product_id=b.product_id
       INNER JOIN product_inventory i ON p.product_id=i.product_id
       INNER JOIN product_img m ON p.product_id=m.product_id
      WHERE p.product_id NOT IN ($1) LIMIT 3
	    `,
      [product_id]
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
