import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation (
    $name: String!
    $price: Int!
    $adminId: ID!
    $type: String!
    $pieces: Int!
    # $percent: Int!
    # $active: Boolean!
    $width: Int!
    $height: Int!
    $origin: String
    $weight: Int!
    $age: Int
    $family: String
    # $main_color: String
    $description: String
    $img_1: String!
    $img1_id: String!
    $img_2: String
    $img2_id: String
    $img_3: String # $discount_name: String
    $img3_id: String
  ) {
    addProduct(
      name: $name
      price: $price
      admin_id: $adminId
      type: $type
      pieces: $pieces
      # percent: $percent
      weight: $weight
      # active: $active
      width: $width
      height: $height
      origin: $origin
      age: $age
      family: $family
      # main_color: $main_color
      description: $description
      img_1: $img_1
      img1_id: $img1_id
      img_2: $img_2
      img2_id: $img2_id
      img_3: $img_3 # discount_name: $discount_name
      img3_id: $img3_id
    ) {
      name
      price
      product_id
    }
  }
`;
