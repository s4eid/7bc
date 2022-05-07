import { gql } from "@apollo/client";

export const RESET_PASSWORD = gql`
  query ($email: String!) {
    resetPassword(email: $email)
  }
`;
