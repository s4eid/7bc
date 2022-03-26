import { gql } from "@apollo/client";

export const ADD_USER_ADDRESS = gql`
  mutation (
    $address: String!
    $country: String!
    $city: String!
    $area: String!
    $zipCode: Int!
    $ip: String!
    $userId: ID!
  ) {
    addUser_address(
      address: $address
      country: $country
      city: $city
      area: $area
      zip_code: $zipCode
      ip: $ip
      user_id: $userId
    ) {
      address
      user_id
      user_address_id
    }
  }
`;
