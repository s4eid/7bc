import { PRODUCTS_TYPE } from "../../Types/Products";

export const getProduct =
  (products, pageInfo) => async (dispatch, getState) => {
    try {
      const existData = getState().products.products;
      if (products.length == 4 && existData == null) {
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
      } else if (products.length !== 4 && existData !== null) {
        dispatch({
          type: PRODUCTS_TYPE.GET_MORE_PRODUCTS,
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
export const getMoreProduct = (products, pageInfo) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_TYPE.GET_MORE_PRODUCTS,
      payload: {
        products,
        pageInfo,
      },
    });
  } catch (error) {}
};
