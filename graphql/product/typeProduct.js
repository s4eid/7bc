import { gql } from "apollo-server-micro";
const typeProduct = gql`
  type Product {
    product_id: ID!
    name: String!
    price: String!
    type: String!
    created_at: String!
    product_details_id: ID
    width: String!
    height: String!
    origin: String
    age: Int
    family: String
    main_color: String
    description: String
    weight: String!
    product_inventory_id: ID!
    pieces: Int!
    made: String
    shape: String
    material: String
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
  type searchProductR {
    name: String!
    type: String!
    made: String
    product_id: ID!
  }
  type PageInfo {
    startCursor: String
    hasNextPage: Boolean
  }
  type Edge {
    node: [Product]
  }
  type GetProductss {
    edges: Edge
    pageInfo: PageInfo
  }
  input Filter {
    price: String
    made: String
    origin: String
  }
  type Query {
    products(
      type: String!
      made: String
      origin: String
      price: String
      afterCursor: String
      first: Int
    ): GetProductss
    product(product_id: ID!): Product!
    notOneProduct(product_id: ID!): [Product]!
    getProducts(product_array: [String!]!): [Product]!
    searchProduct(text: String!): [searchProductR]
  }
`;
export default typeProduct;
