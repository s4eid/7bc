import { gql } from "@apollo/client";

export const EDIT_USER_ADDRESS = gql`
  mutation (
    $address: String!
    $country: String!
    $city: String!
    $area: String!
    $zipCode: Int!
    $ip: String!
    $phone_number: String!
    $userId: ID!
  ) {
    editUser_address(
      address: $address
      country: $country
      city: $city
      area: $area
      zip_code: $zipCode
      ip: $ip
      phone_number: $phone_number
      user_id: $userId
    ) {
      user_address_id
      user_id
      address
      area
      city
      country
      phone_number
      ip
      zip_code
    }
  }
`;
