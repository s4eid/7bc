import { add_order } from "../../Querys/Order/addOrder";

const resolverUser = {
  Query: {},
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
