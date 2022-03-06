import { gql } from "apollo-server-micro";
const typeProduct = gql`
  type Product {
    product_id: ID!
    name: String!
    price: Int!
    type: String!
    created_at: String!
    product_details_id: ID
    width: Int!
    height: Int!
    origin: String
    age: Int
    family: String
    main_color: String
    description: String
    weight: Int!
    product_inventory_id: ID!
    pieces: Int!
    # product_discount_id: ID!
    # percent: Int!
    # active: Boolean!
    # discount_name: String
    product_img_id: ID!
    img_1: String!
    img1_id: String!
    img_2: String
    img2_id: String
    img_3: String
    img3_id: String
  }

  type Query {
    products(type: String!): [Product!]
    product(product_id: ID!): Product!
  }
  # type Mutation {}
`;
export default typeProduct;
