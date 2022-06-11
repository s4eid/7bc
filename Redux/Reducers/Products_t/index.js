import { PRODUCTS_T_TYPE } from "../../Types/Products_t";
const inisialState = {
  products: null,
  pageInfo: {
    startCursor: null,
    hasNextPage: null,
  },
  loading: true,
};
export const products_t = (state = inisialState, action) => {
  switch (action.type) {
    case PRODUCTS_T_TYPE.LOADING_ON_T:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCTS_T_TYPE.GET_PRODUCTS_T:
      return {
        products: action.payload.products,
        pageInfo: {
          startCursor: action.payload.pageInfo.startCursor,
          hasNextPage: action.payload.pageInfo.hasNextPage,
        },
      };
    case PRODUCTS_T_TYPE.GET_MORE_PRODUCTS_T:
      return {
        products: action.payload.products,
        pageInfo: {
          startCursor: action.payload.pageInfo.startCursor,
          hasNextPage: action.payload.pageInfo.hasNextPage,
        },
      };
    case PRODUCTS_T_TYPE.LOAIDNG_OFF_T:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
