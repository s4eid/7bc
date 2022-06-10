import { gql } from "@apollo/client";

export const GET_HOME_PRODUCTS = gql`
  query {
    getHomeProducts {
      products {
        img_1
        name
        price
        product_id
      }
    }
  }
`;
