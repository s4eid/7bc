import { PRODUCTS_TYPE } from "../../Types/Products";

export const getProduct = (products, pageInfo) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_TYPE.LOADING_ON,
      payload: true,
    });
    dispatch({
      type: PRODUCTS_TYPE.GET_PRODUCTS,
      payload: {
        products,
        pageInfo,
      },
    });
    dispatch({
      type: PRODUCTS_TYPE.LOAIDNG_OFF,
      payload: false,
    });
  } catch (error) {}
};
