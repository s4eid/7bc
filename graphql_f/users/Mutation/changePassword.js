import { gql } from "@apollo/client";

export const CHANGE_PASSWORD = gql`
  mutation ($userId: ID!, $password: String!) {
    confrimPassword(user_id: $userId, password: $password)
  }
`;
