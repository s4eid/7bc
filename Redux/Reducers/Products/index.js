import { PRODUCTS_TYPE } from "../../Types/Products";
const inisialState = {
  products: null,
  pageInfo: {
    startCursor: null,
    hasNextPage: null,
  },
  loading: true,
};

export const products = (state = inisialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case PRODUCTS_TYPE.LOADING_ON:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCTS_TYPE.GET_PRODUCTS:
      //  const newD=action.payload.products.find()
      return {
        products: action.payload.products,
        pageInfo: {
          startCursor: action.payload.pageInfo.startCursor,
          hasNextPage: action.payload.pageInfo.hasNextPage,
        },
      };
    case PRODUCTS_TYPE.LOAIDNG_OFF:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
