import { gql } from "@apollo/client";

export const GET_PRODUCTS_F = gql`
  query ($productArray: [String!]!) {
    getProducts(product_array: $productArray) {
      product_id
      price
      name
      img_1
      pieces
    }
  }
`;
