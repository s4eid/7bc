import { getProducts } from "../../Querys/product/getProducts";
import { getOneProduct } from "../../Querys/product/getOneProduct";

const resolverProduct = {
  Query: {
    async products(_, { type }, { pool }) {
      const data = await getProducts(type, pool);
      return data;
    },
    async product(_, { product_id }, { pool }) {
      const data = await getOneProduct(product_id, pool);
      return data;
    },
  },

  Mutation: {},
};
export default resolverProduct;
