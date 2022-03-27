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
      // console.log("at least");
      // if (action.payload.products.length > 4) {
      //   return {
      //     products: [...state.products, action.payload.products],
      //     pageInfo: {
      //       startCursor: action.payload.pageInfo.startCursor,
      //       hasNextPage: action.payload.pageInfo.hasNextPage,
      //     },
      //   };
      // }
      // if (state.products.length > 0 && action.payload.products.length <= 4) {
      //   console.log("im in");
      // let newItems;
      // for (let i = 0; i < action.payload.products.length; i++) {
      //   console.log(i);
      //   for (let m = 0; m < state.products.length; m++) {
      //     if (
      //       state.products[m].product_id !==
      //       action.payload.products[i].product_id
      //     ) {
      //       newItems[action.payload.products];
      //     }
      //   }
      // }
      // console.log(newItems);
      // return {
      //   ...state,
      // products: action.payload.products,
      //   pageInfo: {
      //     startCursor: action.payload.pageInfo.startCursor,
      //     hasNextPage: action.payload.pageInfo.hasNextPage,
      //   },
      // };
      // }
      console.log("im here");
      return {
        products: action.payload.products,
        pageInfo: {
          startCursor: action.payload.pageInfo.startCursor,
          hasNextPage: action.payload.pageInfo.hasNextPage,
        },
      };
    case PRODUCTS_TYPE.GET_MORE_PRODUCTS:
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
