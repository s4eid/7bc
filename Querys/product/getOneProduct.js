export const getOneProduct = async (product_id, pool) => {
  try {
    const data = await pool.query(
      `
 SELECT * FROM product p 
 INNER JOIN product_details b ON p.product_id=b.product_id
 INNER JOIN product_inventory i ON p.product_id=i.product_id
 INNER JOIN product_img m ON p.product_id=m.product_id
WHERE p.product_id=$1
      `,
      //  INNER JOIN product_discount d ON p.product_id=d.product_id
      [product_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
