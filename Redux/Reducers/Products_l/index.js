import { PRODUCTS_L_TYPE } from "../../Types/Products_l";
const inisialState = {
  products: null,
  pageInfo: {
    startCursor: null,
    hasNextPage: null,
  },
  loading: true,
};
export const products_l = (state = inisialState, action) => {
  switch (action.type) {
    case PRODUCTS_L_TYPE.LOADING_ON_L:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCTS_L_TYPE.GET_PRODUCTS_L:
      return {
        products: action.payload.products,
        pageInfo: {
          startCursor: action.payload.pageInfo.startCursor,
          hasNextPage: action.payload.pageInfo.hasNextPage,
        },
      };
    case PRODUCTS_L_TYPE.GET_MORE_PRODUCTS_L:
      return {
        products: action.payload.products,
        pageInfo: {
          startCursor: action.payload.pageInfo.startCursor,
          hasNextPage: action.payload.pageInfo.hasNextPage,
        },
      };
    case PRODUCTS_L_TYPE.LOAIDNG_OFF_L:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
