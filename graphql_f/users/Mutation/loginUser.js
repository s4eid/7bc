import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!, $token: String!) {
    loginUser(email: $email, password: $password, token: $token)
  }
`;
