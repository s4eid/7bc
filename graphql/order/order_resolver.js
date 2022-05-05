import { add_order } from "../../Querys/Order/addOrder";
import { getOrder } from "../../Querys/Order/getOrder";
import { getOrders } from "../../Querys/Order/getOrders";

const resolverUser = {
  Query: {
    async getOrder(_, { order_id }, { pool }) {
      const data = await getOrder(order_id, pool);
      console.log(data);
      return data;
    },
    async getOrders(_, { user_id }, { pool }) {
      const data = await getOrders(user_id, pool);
      return data;
    },
  },
  Mutation: {
    async add_order(
      _,
      {
        user_id,
        email,
        full_name,
        owner,
        card_number,
        expire_m,
        expire_y,
        total_price,
        product_list,
        cart_items,
        cvv,
        address,
        country,
        phone_number,
        city,
        area,
        zip_code,
        ip,
      },
      { pool }
    ) {
      const data = await add_order(
        user_id,
        email,
        full_name,
        owner,
        card_number,
        expire_m,
        expire_y,
        total_price,
        product_list,
        cart_items,
        cvv,
        address,
        country,
        phone_number,
        city,
        area,
        zip_code,
        ip,
        pool
      );
      return data;
    },
  },
};
export default resolverUser;
