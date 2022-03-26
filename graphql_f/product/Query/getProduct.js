import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts($first: Int, $afterCursor: String) {
    products(first: $first, afterCursor: $afterCursor) {
      edges {
        node {
          name
          price
          img_1
          width
          height
          product_id
        }
      }
      pageInfo {
        hasNextPage
        startCursor
      }
    }
  }
`;
