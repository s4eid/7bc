import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query ($userId: ID) {
    getUserInfo(user_id: $userId) {
      address
      area
      city
      country
      ip
      zip_code
      phone_number
      owner
      card_number
      expire_m
      expire_y
    }
  }
`;
