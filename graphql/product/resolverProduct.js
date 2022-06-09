import { _getProducts } from "../../Querys/product/getProducts";
import { getOneProduct } from "../../Querys/product/getOneProduct";
import { getProductsP } from "../../Querys/product/getProductsP";
import { getNotOneProduct } from "../../Querys/product/getNotOneProduct";
import { searchProducts } from "../../Querys/product/searchProducts";
import { getHomeProduct } from "../../Querys/product/getHomeProduct";

const resolverProduct = {
  Query: {
    async getHomeProducts(_, __, { pool }) {
      const data = await getHomeProduct(pool);
      return data;
    },
    async products(
      _,
      { type, first, afterCursor, price, made, origin },
      { pool }
    ) {
      const data = await _getProducts(
        type,
        first,
        afterCursor,
        price,
        made,
        origin,
        pool
      );
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
    async searchProduct(_, { text }, { pool }) {
      const data = await searchProducts(text, pool);
      return data;
    },
  },

  Mutation: {},
};
export default resolverProduct;
