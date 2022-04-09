import { getProducts } from "../../Querys/product/getProducts";
import { getOneProduct } from "../../Querys/product/getOneProduct";
import { getProductsP } from "../../Querys/product/getProductsP";
import { getNotOneProduct } from "../../Querys/product/getNotOneProduct";

const resolverProduct = {
  Query: {
    async products(_, { type, first, afterCursor }, { pool }) {
      const data = await getProducts(type, first, afterCursor, pool);
      return data;
    },
    async product(_, { product_id }, { pool }) {
      const data = await getOneProduct(product_id, pool);
      return data;
    },

    async getProducts(_, { product_array }, { pool }) {
      const data = await getProductsP(product_array, pool);
      return data;
    },
    async notOneProduct(_, { product_id }, { pool }) {
      const data = await getNotOneProduct(product_id, pool);
      return data;
    },
  },

  Mutation: {},
};
export default resolverProduct;
