import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getSomeProducts(
    $type: String!
    $made: String
    $origin: String
    $price: String
    $afterCursor: String
    $first: Int
  ) {
    products(
      type: $type
      made: $made
      origin: $origin
      price: $price
      afterCursor: $afterCursor
      first: $first
    ) {
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
