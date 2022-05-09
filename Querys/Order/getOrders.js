export const getOrders = async (user_id, pool) => {
  try {
    const data = await pool.query(
      `select o.status, o.created_at,o.order_id ,p.paid_price from orders o left join order_payment p 
      on o.order_id=p.order_id where user_id=$1`,
      [user_id]
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
