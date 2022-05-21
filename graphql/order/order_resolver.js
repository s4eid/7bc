import { add_order } from "../../Querys/Order/addOrder";
import { getOrder } from "../../Querys/Order/getOrder";
import { getOrders } from "../../Querys/Order/getOrders";
import { ApolloError } from "apollo-server-errors";
import { ERROR_CODES } from "../../errorCodes/errorCodes";
import { getSession } from "next-auth/react";

const resolverUser = {
  Query: {
    async getOrder(_, { order_id }, { pool, user, req }) {
      let _user;
      const googleUser = await getSession({ req });
      _user = googleUser?.user ? googleUser.user : null;
      if (!user && !_user) {
        return new ApolloError("You Are Not Authenticated!", ERROR_CODES.AUTH);
      }
      const data = await getOrder(order_id, pool);
      return data;
    },
    async getOrders(_, { user_id }, { pool, user, _user }) {
      // if (!user && !_user) {
      //   return new ApolloError("You Are Not Authenticated!", ERROR_CODES.AUTH);
      // }
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
      { pool, user, _user }
    ) {
      // if (!user && !_user) {
      //   return new ApolloError("You Are Not Authenticated!", ERROR_CODES.AUTH);
      // }
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
