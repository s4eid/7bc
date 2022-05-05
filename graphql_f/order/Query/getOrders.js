import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query ($userId: ID!) {
    getOrders(user_id: $userId) {
      order_id
      status
      paid_price
      created_at
    }
  }
`;
