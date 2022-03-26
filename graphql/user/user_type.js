import { gql } from "apollo-server-micro";
const typeUser = gql`
  type User {
    user_id: ID!
    full_name: String!
    email: String!
    password: String!
    created_at: String!
    phone_number: String!
    refresh_token: String
  }
  type addUserAddress {
    user_address_id: ID!
    user_id: ID!
    address: String!
    country: String!
    city: String!
    area: String!
    zip_code: Int!
    ip: String!
    created_at: String!
  }
  type addUserPayment {
    user_payment_id: ID!
    owner: String!
    cart_number: String!
    expire_m: Int!
    expire_y: Int!
    cvv: Int!
    company: String
    type: String
    user_id: ID!
  }
  type getUser {
    user_id: ID!
    full_name: String!
    email: String!
    password: String!
    created_at: String!
    phone_number: String!
    refresh_token: String
    user_payment_id: ID
    owner: String
    cart_number: String
    expire_m: Int
    expire_y: Int
    cvv: Int
    company: String
    type: String
    user_address_id: ID
    address: String
    country: String
    city: String
    area: String
    zip_code: Int
    ip: String
  }
  type UserAddress {
    user_id: ID
    user_address_id: ID
    address: String
    country: String
    city: String
    area: String
    zip_code: Int
    ip: String
  }
  type Query {
    users: [getUser!]!
    getUserAddress(user_id: ID!): UserAddress
  }
  type Mutation {
    # addUser(
    #   full_name: String!
    #   phone_number: String!
    #   email: String!
    #   password: String!
    # ): User!
    # deleteUser(user_id: ID!): User
    addUser_address(
      address: String!
      country: String!
      city: String!
      area: String!
      zip_code: Int!
      ip: String!
      user_id: ID!
    ): addUserAddress!
    editUser_address(
      address: String!
      country: String!
      city: String!
      area: String!
      zip_code: Int!
      ip: String!
      user_id: ID!
    ): addUserAddress!

    # addUser_payment(
    #   owner: String!
    #   cart_number: String!
    #   expire_m: Int!
    #   expire_y: Int!
    #   type: String
    #   cvv: Int!
    #   company: String
    #   user_id: ID!
    # ): addUserPayment!
    registerUser(
      full_name: String!
      phone_number: String!
      email: String!
      password: String!
    ): User
    loginUser(email: String!, password: String!): User
  }
`;
export default typeUser;
