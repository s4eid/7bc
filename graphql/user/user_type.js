import { gql } from "apollo-server-micro";
const typeUser = gql`
  type User {
    user_id: ID!
    name: String!
    email: String!
    password: String!
    created_at: String!
    refresh_token: String
  }
  type addUserAddress {
    user_address_id: ID!
    phone_number: String!
    user_id: ID!
    address: String!
    country: String!
    city: String!
    area: String!
    zip_code: String!
    ip: String!
    created_at: String!
  }
  type addUserPayment {
    user_payment_id: ID!
    owner: String!
    card_number: String!
    expire_m: Int!
    expire_y: Int!
    cvv: Int!
    company: String
    type: String
    user_id: ID!
  }
  type getUser {
    user_id: ID!
    name: String!
    email: String!
    password: String!
    created_at: String!
    refresh_token: String
    user_payment_id: ID
    owner: String
    card_number: String
    expire_m: Int
    expire_y: Int
    cvv: Int
    card_type: String
    card_family: String
    card_association: String
    user_address_id: ID
    address: String
    country: String
    city: String
    area: String
    phone_number: String
    zip_code: String
    ip: String
  }
  type UserAddress {
    user_id: ID
    user_address_id: ID
    address: String
    country: String
    phone_number: String
    city: String
    area: String
    zip_code: String
    ip: String
  }
  type UserInfo {
    owner: String
    card_number: String
    expire_m: Int
    expire_y: Int
    cvv: Int
    address: String!
    country: String!
    phone_number: String!
    city: String!
    area: String!
    zip_code: String!
    ip: String!
  }
  type Query {
    users: [getUser!]!
    getUserAddress(user_id: ID): UserAddress
    getUserInfo(user_id: ID): UserInfo
  }
  type Mutation {
    addUser_address(
      address: String!
      country: String!
      city: String!
      area: String!
      phone_number: String!
      zip_code: String!
      ip: String!
      user_id: ID!
    ): addUserAddress!
    editUser_address(
      address: String!
      country: String!
      phone_number: String!
      city: String!
      area: String!
      zip_code: String!
      ip: String!
      user_id: ID!
    ): addUserAddress!

    # addUser_payment(
    #   owner: String!
    #   _number: String!
    #   expire_m: Int!
    #   expire_y: Int!
    #   type: String
    #   cvv: Int!
    #   company: String
    #   user_id: ID!
    # ): addUserPayment!
    registerUser(name: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
  }
`;
export default typeUser;
