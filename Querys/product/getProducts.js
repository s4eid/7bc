export const _getProducts = async (
  type,
  first,
  afterCursor,
  price,
  made,
  origin,
  pool
) => {
  const count = await pool.query("SELECT COUNT(product_id) FROM product");
  try {
    if (!afterCursor) {
      if (made || origin || price) {
        const data = await pool.query(
          `
 SELECT * FROM product p 
 INNER JOIN product_details b ON p.product_id=b.product_id
 INNER JOIN product_inventory i ON p.product_id=i.product_id
 INNER JOIN product_img m ON p.product_id=m.product_id WHERE p.type=$1 ${
   made ? `AND p.made='${made}'` : " "
 }
${origin ? `AND b.origin='${origin}'` : " "}
     ORDER BY p.product_id ASC LIMIT $2
`,
          [type, first]
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
 INNER JOIN product_img m ON p.product_id=m.product_id WHERE p.type=$1
     ORDER BY p.product_id ASC LIMIT $2
`,
        [type, first]
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

    if (made || origin || price) {
      const data = await pool.query(
        `
 SELECT * FROM product p 
 INNER JOIN product_details b ON p.product_id=b.product_id
 INNER JOIN product_inventory i ON p.product_id=i.product_id
 INNER JOIN product_img m ON p.product_id=m.product_id WHERE p.product_id > $1 AND p.type=$2 ${
   made ? `AND p.made='${made}'` : ""
 }
${origin ? `AND b.origin='${origin}'` : ""}
 ORDER BY p.product_id ASC LIMIT $3
`,
        [afterCursor, type, first]
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
      WHERE p.product_id > $1 AND p.type=$2  ORDER BY p.product_id ASC LIMIT $3
      `,
      [afterCursor, type, first]
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
