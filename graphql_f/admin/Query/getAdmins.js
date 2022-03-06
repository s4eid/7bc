import { gql } from "@apollo/client";

export const GET_ADMINS = gql`
  query getAdmins {
    admins {
      admin_id
      full_name
      email
    }
  }
`;
