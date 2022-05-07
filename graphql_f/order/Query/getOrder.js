import { gql } from "@apollo/client";

export const GET_ORDER = gql`
  query ($orderId: ID!) {
    getOrder(order_id: $orderId) {
      order_info {
        order_id
        address
        area
        city
        country
        created_at
        # currency
        # paid_price
        phone_number
        # status
      }
      order_items {
        quantity
        paid_price
        img_1
      }
    }
  }
`;