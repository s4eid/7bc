import { gql } from "@apollo/client";

export const GET_USER_ADDRESS = gql`
  query ($userId: ID!) {
    getUserAddress(user_id: $userId) {
      address
      area
      user_id
      city
      country
      ip
      user_address_id
      zip_code
    }
  }
`;
