import { gql } from "@apollo/client";

export const GET_USER_ADDRESS = gql`
  query ($user_id: ID!) {
    getUserAddress(user_id: $user_id) {
      address
      area
      user_id
      city
      country
      ip
      phone_number
      user_address_id
      zip_code
    }
  }
`;
