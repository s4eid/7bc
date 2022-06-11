import { PRODUCTS_T_TYPE } from "../../Types/Products_t";
export const getProduct_t =
  (products, pageInfo) => async (dispatch, getState) => {
    try {
      const existData = getState().products_t.products;
      if (products.length == 4 && existData == null) {
        dispatch({
          type: PRODUCTS_T_TYPE.LOADING_ON_T,
          payload: true,
        });
        dispatch({
          type: PRODUCTS_T_TYPE.GET_PRODUCTS_T,
          payload: {
            products,
            pageInfo,
          },
        });
        dispatch({
          type: PRODUCTS_T_TYPE.LOAIDNG_OFF_T,
          payload: false,
        });
      } else if (products.length !== 4 && existData !== null) {
        dispatch({
          type: PRODUCTS_T_TYPE.GET_MORE_PRODUCTS_T,
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
      type: PRODUCTS_T_TYPE.LOADING_ON_T,
      payload: true,
    });
    dispatch({
      type: PRODUCTS_T_TYPE.GET_PRODUCTS_T,
      payload: {
        products,
        pageInfo,
      },
    });
    dispatch({
      type: PRODUCTS_T_TYPE.LOAIDNG_OFF_T,
      payload: false,
    });
  } catch (error) {}
};
export const getMoreProduct_t = (products, pageInfo) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_T_TYPE.GET_MORE_PRODUCTS_T,
      payload: {
        products,
        pageInfo,
      },
    });
  } catch (error) {}
};
