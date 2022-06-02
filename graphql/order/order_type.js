import { gql } from "apollo-server-micro";
const typeOrder = gql`
  type Order {
    status: String
  }
  input Cart_items {
    price: Float!
    priceEach: String!
    id: ID!
    name: String!
    category1: String!
    itemType: String!
    quantity: Int!
  }
  # directive @auth on FIELD_DEFINITION
  type OrderItems {
    quantity: Int!
    paid_price: String!
    img_1: String!
    product_id: ID!
  }
  type OrderInfo {
    order_id: ID!
    order_client_id: ID!
    status: Int!
    created_at: String!
    shipping_price: Int!
    address: String!
    country: String!
    city: String!
    area: String!
    zip_code: String!
    phone_number: String!
    currency: String!
    paid_price: String!
  }
  type getOrdersT {
    order_id: ID!
    status: Int
    created_at: String
    paid_price: String
  }

  type OneOrder {
    order_info: OrderInfo
    order_items: [OrderItems]
  }
  type Query {
    getOrder(order_id: ID!): OneOrder
    getOrders(user_id: ID!): [getOrdersT]!
  }
  type Mutation {
    add_order(
      user_id: ID!
      email: String!
      full_name: String!
      owner: String!
      card_number: String!
      expire_m: Int!
      expire_y: Int!
      total_price: Float!
      product_list: [String!]!
      cart_items: [Cart_items!]!
      cvv: Int!
      address: String!
      country: String!
      phone_number: String!
      city: String!
      area: String!
      zip_code: String!
      ip: String!
      threeD: Boolean
    ): Order
  }
`;
export default typeOrder;
