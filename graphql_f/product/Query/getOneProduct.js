import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getOneProduct($product_id: ID!) {
    product(product_id: $product_id) {
      product_id
      name
      price
      img_1
      img1_id
      img_2
      img2_id
      img_3
      img3_id
      family
      age
      pieces
      origin
      description
      width
      height
    }
  }
`;
