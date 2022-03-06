import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts($type: String!) {
    products(type: $type) {
      name
      price
      img_1
      width
      height
      product_id
    }
  }
`;
