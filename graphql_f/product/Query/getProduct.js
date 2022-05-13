import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts($first: Int, $type: String!, $afterCursor: String) {
    products(first: $first, type: $type, afterCursor: $afterCursor) {
      edges {
        node {
          name
          price
          img_1
          width
          height
          product_id
          pieces
        }
      }
      pageInfo {
        hasNextPage
        startCursor
      }
    }
  }
`;
