export const getOrder = async (order_id, pool) => {
  try {
    const order = await pool.query(
      `
select * from orders o left join order_shipping s on o.order_id=s.order_id
 left join order_payment 
p on o.order_id=p.order_id where o.order_id=$1
 `,
      [order_id]
    );
    const order_items = await pool.query(
      ` select * from order_items o inner join product_img p on o.product_id=p.product_id where order_id=$1;`,
      [order_id]
    );
    const orderResult = {
      order_items: order_items.rows,
      order_info: order.rows[0],
    };
    return orderResult;
  } catch (error) {
    console.log(error);
  }
};
