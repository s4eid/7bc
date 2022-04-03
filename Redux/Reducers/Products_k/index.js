import { PRODUCTS_K_TYPE } from "../../Types/Products_k";
const inisialState = {
  products: null,
  pageInfo: {
    startCursor: null,
    hasNextPage: null,
  },
  loading: true,
};
export const products_k = (state = inisialState, action) => {
  switch (action.type) {
    case PRODUCTS_K_TYPE.LOADING_ON_K:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCTS_K_TYPE.GET_PRODUCTS_K:
      return {
        products: action.payload.products,
        pageInfo: {
          startCursor: action.payload.pageInfo.startCursor,
          hasNextPage: action.payload.pageInfo.hasNextPage,
        },
      };
    case PRODUCTS_K_TYPE.GET_MORE_PRODUCTS_K:
      return {
        products: action.payload.products,
        pageInfo: {
          startCursor: action.payload.pageInfo.startCursor,
          hasNextPage: action.payload.pageInfo.hasNextPage,
        },
      };
    case PRODUCTS_K_TYPE.LOAIDNG_OFF_K:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
