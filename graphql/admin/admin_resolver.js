import { getAdmins } from "../../Querys/admin/getAdmins";
import { addAdmin } from "../../Querys/admin/addAdmin";

const resolverAdmin = {
  Query: {
    async admins(_, __, { pool }) {
      const data = await getAdmins(pool);
      return data;
    },
  },
  Mutation: {
    async addAdmin(_, { full_name, email, password, phone_number }, { pool }) {
      const data = await addAdmin(
        full_name,
        email,
        password,
        phone_number,
        pool
      );
      return data;
    },
  },
};
export default resolverAdmin;
