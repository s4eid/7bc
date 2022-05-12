import { gql } from "apollo-server-micro";
const typeOrder = gql`
  type Order {
    status: String
  }
  input Cart_items {
    price: Int!
    priceEach: Int!
    id: ID!
    name: String!
    category1: String!
    itemType: String!
    quantity: Int!
  }
  type OrderItems {
    quantity: Int!
    payment_transaction_id: ID!
    price: Int!
    paid_price: Int!
    img_1: String!
    product_id: ID!
    transaction_status: String!
    iyzico_commission_fee: String!
    iyzico_commission_rate: String!
  }
  type OrderInfo {
    order_id: ID!
    status: Int!
    created_at: String!
    user_id: ID!
    # order_shipping_id:ID!
    company: String
    shipping_price: Int!
    address: String!
    country: String!
    city: String!
    area: String!
    zip_code: String!
    ip: String!
    phone_number: String!
    # status: String!
    owner: String!
    card_number: String!
    expire_m: Int!
    expire_y: Int!
    cvv: Int!
    currency: String!
    conversation_id: ID
    paid_price: Int!
    card_association: String
    card_family: String
    card_type: String
    price: Int!
    installment: Int!
    fraud_status: Int!
    iyzico_commission_fee: String!
    iyzico_commission_rate: String!
  }
  type getOrdersT {
    order_id: ID!
    status: Int
    created_at: String
    paid_price: Int
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
      total_price: Int!
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
