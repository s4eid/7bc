import { gql } from "@apollo/client";

export const ADD_ORDER = gql`
  mutation (
    $userId: ID!
    $email: String!
    $fullName: String!
    $owner: String!
    $cardNumber: String!
    $expireM: Int!
    $expireY: Int!
    $totalPrice: Int!
    $productList: [String!]!
    $cvv: Int!
    $address: String!
    $country: String!
    $phoneNumber: String!
    $city: String!
    $area: String!
    $zipCode: String!
    $ip: String!
    $cartItems: [Cart_items!]!
    $threeD: Boolean
  ) {
    add_order(
      user_id: $userId
      email: $email
      full_name: $fullName
      owner: $owner
      card_number: $cardNumber
      expire_m: $expireM
      expire_y: $expireY
      total_price: $totalPrice
      product_list: $productList
      cvv: $cvv
      address: $address
      country: $country
      phone_number: $phoneNumber
      city: $city
      area: $area
      zip_code: $zipCode
      cart_items: $cartItems
      ip: $ip
      threeD: $threeD
    ) {
      status
    }
  }
`;
