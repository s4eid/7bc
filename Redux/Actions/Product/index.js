import { PRODUCT_TYPE } from "../../Types/Product";
import { GET_PRODUCT } from "../../../graphql_f/product/Query/getOneProduct";
import { initializeApollo } from "../../../apolloConfig/apollo";

export const addProduct = (product_id) => async (dispatch, getState) => {
  try {
    const client = initializeApollo();
    const data = await client.query({
      query: GET_PRODUCT,
      variables: { product_id },
    });
    const product = data.data.product;
    dispatch({
      type: PRODUCT_TYPE.ADD_PRODUCT_TYPE,
      payload: {
        name: product.name,
        price: product.price,
        img_1: product.img_1,
        pieces: product.pieces,
        product_id: product.product_id,
        quantity: 1,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().product.cartItems)
    );
  } catch (error) {}
};

export const plusQuantity = (product_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_TYPE.PLUS_PRODUCT_TYPE,
      payload: product_id,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().product.cartItems)
    );
  } catch (error) {}
};

export const minusQuantity = (product_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_TYPE.MINUS_PRODUCT_TYPE,
      payload: product_id,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().product.cartItems)
    );
  } catch (error) {}
};
export const deleteProduct = (product_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_TYPE.DELETE_PRODUCT_TYPE,
      payload: product_id,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().product.cartItems)
    );
  } catch (error) {}
};
