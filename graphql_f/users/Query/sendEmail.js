import { gql } from "@apollo/client";

export const SEND_EMIAL = gql`
  query (
    $email: String!
    $name: String!
    $message: String!
    $phoneNumber: String
  ) {
    sendEmail(
      email: $email
      name: $name
      message: $message
      phone_number: $phoneNumber
    )
  }
`;
