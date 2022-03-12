import { registerUser } from "../../Querys/user/registerUser";
import { loginUser } from "../../Querys/user/loginUser";
// import { addUser } from "../../Querys/user/addUser";

// import { deleteUser } from "../../Querys/user/deleteUser";
// import { addUser_address } from "../../Querys/user/addUser_address";
// import { addUser_payment } from "../../Querys/user/addUser_payment";
const resolverUser = {
  // Query: {
  //   async users(_, __, { pool }) {
  //     const data = await getUsers(pool);
  //     return data;
  //   },
  // },
  Mutation: {
    // async addUser(
    //   _,
    //   { full_name, email, password, phone_number },
    //   { pool, res }
    // ) {
    //   const data = await addUser(
    //     full_name,
    //     email,
    //     password,
    //     phone_number,
    //     pool,
    //     res
    //   );
    //   return data;
    // },
    async registerUser(
      _,
      { email, password, full_name, phone_number },
      { pool }
    ) {
      const data = await registerUser(
        full_name,
        email,
        password,
        phone_number,
        pool
      );
      return data;
    },
    async loginUser(_, { email, password }, { res, pool }) {
      const data = await loginUser(email, password, res, pool);
      return data;
    },
    // async deleteUser(_, { user_id }, { pool }) {
    //   const data = await deleteUser(user_id, pool);
    //   return data;
    // },
    // async addUser_address(
    //   _,
    //   { address, country, city, area, zip_code, ip, user_id },
    //   { pool }
    // ) {
    //   const data = await addUser_address(
    //     address,
    //     country,
    //     city,
    //     area,
    //     zip_code,
    //     ip,
    //     user_id,
    //     pool
    //   );
    //   return data;
    // },
    // async addUser_payment(
    //   _,
    //   { owner, cart_number, expire_m, expire_y, type, cvv, company, user_id },
    //   { pool }
    // ) {
    //   const data = await addUser_payment(
    //     owner,
    //     cart_number,
    //     expire_m,
    //     expire_y,
    //     type,
    //     cvv,
    //     company,
    //     user_id,
    //     pool
    //   );
    //   return data;
    // },
  },
};
export default resolverUser;
