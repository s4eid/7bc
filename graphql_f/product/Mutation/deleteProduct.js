import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
  mutation ($product_id: ID!) {
    deleteProduct(product_id: $product_id) {
      product_id
    }
  }
`;
