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
  type PageInfo {
    startCursor: String
    hasNextPage: Boolean
  }
  type Edge {
    node: [Product]
  }
  type GetProducts {
    edges: Edge
    pageInfo: PageInfo
  }
  type Query {
    # products(type: String!): [Product!]
    products(type: String!, first: Int, afterCursor: String): GetProducts
    product(product_id: ID!): Product!
    notOneProduct(product_id: ID!): [Product]!
    getProducts(product_array: [String!]!): [Product]!
  }
  # type Mutation {}
`;
export default typeProduct;
