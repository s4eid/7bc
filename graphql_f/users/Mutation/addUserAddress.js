import { gql } from "@apollo/client";

export const ADD_USER_ADDRESS = gql`
  mutation (
    $address: String!
    $country: String!
    $city: String!
    $area: String!
    $zipCode: String!
    $ip: String!
    $phone_number: String!
    $userId: ID!
  ) {
    addUser_address(
      address: $address
      country: $country
      city: $city
      area: $area
      zip_code: $zipCode
      ip: $ip
      phone_number: $phone_number
      user_id: $userId
    )
  }
`;
