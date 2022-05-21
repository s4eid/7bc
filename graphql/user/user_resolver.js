import { registerUser } from "../../Querys/user/registerUser";
import { loginUser } from "../../Querys/user/loginUser";
import { getUserAddress } from "../../Querys/user/getUserAddress";
import { editUser_address } from "../../Querys/user/editUser_address";
import { getUserInfo } from "../../Querys/user/getUserInfo";
// import { addUser } from "../../Querys/user/addUser";
// import { deleteUser } from "../../Querys/user/deleteUser";
import { addUser_address } from "../../Querys/user/addUser_address";
import { confrimPassword } from "../../Querys/user/confrimPassword";
import { resetPassword } from "../../Querys/user/resetPassword";
import { sendEmail } from "../../Querys/user/sendEmail";
// import { addUser_payment } from "../../Querys/user/addUser_payment";
import { ApolloError } from "apollo-server-errors";
import { ERROR_CODES } from "../../errorCodes/errorCodes";

const resolverUser = {
  Query: {
    async getUserAddress(_, { user_id }, { pool, user, _user }) {
      // if (!user && !_user) {
      //   return new ApolloError("You Are Not Authenticated!", ERROR_CODES.AUTH);
      // }

      const data = await getUserAddress(user_id, pool);
      return data;
    },
    async getUserInfo(_, { user_id }, { pool, user, _user }) {
      // if (!user && !_user) {
      //   return new ApolloError("You Are Not Authenticated!", ERROR_CODES.AUTH);
      // }
      const data = await getUserInfo(user_id, pool);
      return data;
    },
    async resetPassword(_, { email }, { pool }) {
      const data = await resetPassword(email, pool);
      return data;
    },
    async sendEmail(_, { email, name, message, phone_number }, { pool }) {
      const data = await sendEmail(email, name, message, phone_number, pool);
      return data;
    },
  },
  Mutation: {
    async registerUser(_, { email, password, name }, { pool }) {
      const data = await registerUser(name, email, password, pool);
      return data;
    },
    async loginUser(_, { email, password }, { res, pool }) {
      const data = await loginUser(email, password, res, pool);
      return data;
    },
    async addUser_address(
      _,
      { address, country, city, area, zip_code, ip, phone_number, user_id },
      { pool, user, _user }
    ) {
      // if (!user && !_user) {
      //   return new ApolloError("You Are Not Authenticated!", ERROR_CODES.AUTH);
      // }
      const data = await addUser_address(
        address,
        country,
        city,
        area,
        zip_code,
        ip,
        phone_number,
        user_id,
        pool
      );
      return data;
    },
    async editUser_address(
      _,
      { address, country, city, area, zip_code, ip, phone_number, user_id },
      { pool, user, _user }
    ) {
      // if (!user && !_user) {
      //   return new ApolloError("You Are Not Authenticated!", ERROR_CODES.AUTH);
      // }
      const data = await editUser_address(
        address,
        country,
        city,
        area,
        zip_code,
        ip,
        phone_number,
        user_id,
        pool
      );
      return data;
    },
    async confrimPassword(_, { user_id, password }, { pool }) {
      const data = await confrimPassword(user_id, password, pool);
      return data;
    },
  },
};
export default resolverUser;
