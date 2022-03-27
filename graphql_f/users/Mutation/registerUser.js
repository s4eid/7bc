import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation (
    $fullName: String!
    $phoneNumber: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      full_name: $fullName
      phone_number: $phoneNumber
      email: $email
      password: $password
    ) {
      full_name
      email
    }
  }
`;
