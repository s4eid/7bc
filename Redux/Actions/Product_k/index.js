import { PRODUCTS_K_TYPE } from "../../Types/Products_k";

export const getProduct_k =
  (products, pageInfo) => async (dispatch, getState) => {
    try {
      const existData = getState().products.products;
      if (products.length == 4 && existData == null) {
        dispatch({
          type: PRODUCTS_K_TYPE.LOADING_ON_K,
          payload: true,
        });
        dispatch({
          type: PRODUCTS_K_TYPE.GET_PRODUCTS_K,
          payload: {
            products,
            pageInfo,
          },
        });
        dispatch({
          type: PRODUCTS_K_TYPE.LOAIDNG_OFF_K,
          payload: false,
        });
      } else if (products.length !== 4 && existData !== null) {
        dispatch({
          type: PRODUCTS_K_TYPE.GET_MORE_PRODUCTS_K,
          payload: {
            products,
            pageInfo,
          },
        });
      }
    } catch (error) {}
  };
export const getMoreProduct_k = (products, pageInfo) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_K_TYPE.GET_MORE_PRODUCTS_K,
      payload: {
        products,
        pageInfo,
      },
    });
  } catch (error) {}
};
