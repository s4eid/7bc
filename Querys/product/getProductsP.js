export const getProductsP = async (product_array, pool) => {
  try {
    const data = await pool.query(
      `
SELECT * FROM product p INNER JOIN product_inventory i ON p.product_id=i.product_id INNER JOIN product_img m ON p.product_id=m.product_id WHERE p.product_id=ANY($1) 
	    `,
      [product_array]
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
