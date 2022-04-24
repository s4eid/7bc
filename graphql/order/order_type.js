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
  type Query {
    getOrder: String!
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
    ): Order
  }
`;
export default typeOrder;
