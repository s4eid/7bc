import { gql } from "@apollo/client";

export const GET_HOME_PRODUCTS = gql`
  query {
    getHomeProducts {
      carpet {
        img_1
        name
        product_id
      }
      kilim {
        img_1
        name
        product_id
      }
    }
  }
`;
