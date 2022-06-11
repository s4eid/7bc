import { PRODUCTS_L_TYPE } from "../../Types/Products_l";
export const getProduct_l =
  (products, pageInfo) => async (dispatch, getState) => {
    try {
      const existData = getState().products_l.products;
      if (products.length == 4 && existData == null) {
        dispatch({
          type: PRODUCTS_L_TYPE.LOADING_ON_L,
          payload: true,
        });
        dispatch({
          type: PRODUCTS_L_TYPE.GET_PRODUCTS_L,
          payload: {
            products,
            pageInfo,
          },
        });
        dispatch({
          type: PRODUCTS_L_TYPE.LOAIDNG_OFF_L,
          payload: false,
        });
      } else if (products.length !== 4 && existData !== null) {
        dispatch({
          type: PRODUCTS_L_TYPE.GET_MORE_PRODUCTS_L,
          payload: {
            products,
            pageInfo,
          },
        });
      }
    } catch (error) {}
  };
export const getProduct_filter = (products, pageInfo) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_L_TYPE.LOADING_ON_L,
      payload: true,
    });
    dispatch({
      type: PRODUCTS_L_TYPE.GET_PRODUCTS_L,
      payload: {
        products,
        pageInfo,
      },
    });
    dispatch({
      type: PRODUCTS_L_TYPE.LOAIDNG_OFF_L,
      payload: false,
    });
  } catch (error) {}
};
export const getMoreProduct_l = (products, pageInfo) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_L_TYPE.GET_MORE_PRODUCTS_L,
      payload: {
        products,
        pageInfo,
      },
    });
  } catch (error) {}
};
