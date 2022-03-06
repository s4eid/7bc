import { gql } from "apollo-server-micro";
const typeAdmin = gql`
  type Admin {
    admin_id: ID!
    full_name: String!
    email: String!
    created_at: String!
    phone_number: String!
    refresh_token: String
  }
  type Query {
    admins: [Admin!]!
  }
  type Mutation {
    addAdmin(
      full_name: String!
      phone_number: String!
      email: String!
      password: String!
    ): Admin!
  }
`;
export default typeAdmin;
