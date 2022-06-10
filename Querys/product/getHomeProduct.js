export const getHomeProduct = async (pool) => {
  try {
    const carpet = await pool.query(
      "select p.name,p.price,p.product_id,i.img_1 from product p inner join product_img i on p.product_id=i.product_id where p.type=$1 limit 3",
      ["carpet"]
    );
    const kilim = await pool.query(
      "select p.name,p.price,p.product_id,i.img_1 from product p inner join product_img i on p.product_id=i.product_id where p.type=$1 limit 3",
      ["kilim"]
    );
    let data = carpet.rows.concat(kilim.rows);
    return { products: data };
  } catch (error) {
    console.log(error);
  }
};
