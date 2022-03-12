import { PRODUCT_TYPE } from "../../Types/Product";
import { GET_PRODUCTS_F } from "../../../graphql_f/product/Query/getProducts";
import { initializeApollo } from "../../../apolloConfig/apollo";

export const addProduct = (product_id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_TYPE.ADD_PRODUCT_TYPE,
      payload: product_id,
    });
  } catch (error) {
    // console.log(error);
  }
};

export const getProductsProperty = (product_array) => async (dispatch) => {
  const productArray = JSON.parse(localStorage.getItem("cartItems"));
  try {
    if (productArray) {
      dispatch({
        type: PRODUCT_TYPE.LOADING_PRODUCTS_TRUE,
        payload: true,
      });
      const client = initializeApollo();
      const data = await client.query({
        query: GET_PRODUCTS_F,
        variables: { productArray },
      });
      const info = data.data.getProducts;
      dispatch({
        type: PRODUCT_TYPE.GET_PRODUCTS_TYPE,
        payload: info,
      });
      dispatch({
        type: PRODUCT_TYPE.LOADING_PRODUCTS_FALSE,
        payload: false,
      });
    } else if (product_array.length !== 0) {
      dispatch({
        type: PRODUCT_TYPE.LOADING_PRODUCTS_TRUE,
        payload: true,
      });
      const client = initializeApollo();
      const data = await client.query({
        query: GET_PRODUCTS_F,
        variables: { productArray: product_array },
      });
      const info = data.data.getProducts;
      dispatch({
        type: PRODUCT_TYPE.GET_PRODUCTS_TYPE,
        payload: info,
      });
      dispatch({
        type: PRODUCT_TYPE.LOADING_PRODUCTS_FALSE,
        payload: false,
      });
      console.log(data);
    }
  } catch (error) {}
};
