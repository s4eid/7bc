export const getProducts = async (first, afterCursor, pool) => {
  const count = await pool.query("SELECT COUNT(product_id) FROM product");
  try {
    if (!afterCursor) {
      const data = await pool.query(
        `
 SELECT * FROM product p 
 INNER JOIN product_details b ON p.product_id=b.product_id
 INNER JOIN product_inventory i ON p.product_id=i.product_id
 INNER JOIN product_img m ON p.product_id=m.product_id
     ORDER BY p.product_id ASC LIMIT $1
`,
        [first]
      );
      return {
        edges: {
          node: data.rows,
        },
        pageInfo: {
          startCursor: data.rows.length
            ? data.rows[data.rows.length - 1].product_id
            : null,
          hasNextPage: data.rows.length
            ? count.rows[0].count > data.rows.length
            : false,
        },
      };
    }
    const data = await pool.query(
      `
 SELECT * FROM product p 
 INNER JOIN product_details b ON p.product_id=b.product_id
 INNER JOIN product_inventory i ON p.product_id=i.product_id
 INNER JOIN product_img m ON p.product_id=m.product_id
      WHERE p.product_id > $1  ORDER BY p.product_id ASC LIMIT $2
      `,
      [afterCursor, first]
    );
    return {
      edges: {
        node: data.rows,
      },
      pageInfo: {
        startCursor: data.rows.length
          ? data.rows[data.rows.length - 1].product_id
          : null,
        hasNextPage: data.rows.length
          ? count.rows[0].count > data.rows.length
          : false,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
