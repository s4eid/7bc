import { getProducts } from "../../Querys/product/getProducts";
import { getOneProduct } from "../../Querys/product/getOneProduct";
import { getProductsP } from "../../Querys/product/getProductsP";

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
    async getProducts(_, { product_array }, { pool }) {
      const data = await getProductsP(product_array, pool);
      return data;
    },
  },

  Mutation: {},
};
export default resolverProduct;
