import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation (
    $name: String!
    $email: String!
    $password: String!
    $token: String!
  ) {
    registerUser(
      name: $name
      email: $email
      password: $password
      token: $token
    ) {
      email
    }
  }
`;
