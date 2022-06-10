import { ERROR_CODES } from "../../errorCodes/errorCodes";
import { ApolloError } from "apollo-server-errors";
export const getOrder = async (order_id, currnetUser, pool) => {
  try {
    const order = await pool.query(
      `
select o.order_id,o.order_client_id,o.status,o.created_at,o.user_id,s.address,s.shipping_price,s.country,s.city,s.area,  
s.zip_code,s.phone_number,p.currency,p.paid_price from orders o left join order_shipping s on o.order_id=s.order_id
 left join order_payment 
p on o.order_id=p.order_id where o.order_id=$1
 `,
      [order_id]
    );
    if (order.rows[0].user_id !== currnetUser.user_id) {
      return new ApolloError(
        "You Are Not Allow To See This Content!",
        ERROR_CODES.ALLOW
      );
    }
    const order_items = await pool.query(
      ` select o.product_id,o.quantity,o.paid_price,p.img_1 from order_items o inner join product_img p on o.product_id=p.product_id where order_id=$1;`,
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
