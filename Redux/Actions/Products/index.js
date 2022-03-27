import { PRODUCTS_TYPE } from "../../Types/Products";

export const getProduct =
  (products, pageInfo) => async (dispatch, getState) => {
    console.log(products);
    try {
      const existData = getState().products.products;
      console.log(existData);
      if (products.length == 4 && existData == null) {
        console.log(products.length);
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
