import { PRODUCT_TYPE } from "../../Types/Product";
let inisialState;
if (typeof window !== "undefined") {
  inisialState = {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    loading: false,
  };
}
const inisialState_2 = {
  cartItems: [],
  loading: false,
};

export const product = (
  state = typeof window !== "undefined" ? inisialState : inisialState_2,
  action
) => {
  const item = action.payload;

  switch (action.type) {
    case PRODUCT_TYPE.ADD_PRODUCT_TYPE:
      const existItem = state.cartItems.find(
        (x) => x.product_id === item.product_id
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product_id === existItem.product_id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case PRODUCT_TYPE.PLUS_PRODUCT_TYPE:
      var foundIndex = state.cartItems.findIndex((x) => x.product_id === item);
      if (
        state.cartItems[foundIndex].pieces >
        state.cartItems[foundIndex].quantity
      ) {
        let newArray = state.cartItems;
        newArray[foundIndex].quantity = newArray[foundIndex].quantity + 1;
        newArray[foundIndex]._price =
          newArray[foundIndex].price * newArray[foundIndex].quantity;
        return {
          ...state,
          cartItems: newArray,
        };
      } else return state;
    case PRODUCT_TYPE.MINUS_PRODUCT_TYPE:
      var foundIndex = state.cartItems.findIndex((x) => x.product_id === item);
      if (state.cartItems[foundIndex].quantity > 1) {
        let newArray = state.cartItems;
        newArray[foundIndex].quantity = newArray[foundIndex].quantity - 1;
        newArray[foundIndex]._price =
          newArray[foundIndex].price * newArray[foundIndex].quantity;
        return {
          ...state,
          cartItems: newArray,
        };
      } else return state;
    case PRODUCT_TYPE.DELETE_PRODUCT_TYPE:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product_id !== item),
      };
    case PRODUCT_TYPE.CLEAR_PRODUCT_TYPE:
      return {
        ...state,
        cartItems: [],
      };
    case PRODUCT_TYPE.LOADING_PRODUCTS_TRUE:
      return {
        ...state,
        cartItems: [...state.cartItems],
        loading: item,
      };
    case PRODUCT_TYPE.LOADING_PRODUCTS_FALSE:
      return {
        ...state,
        cartItems: [...state.cartItems],
        loading: item,
      };
    default:
      return state;
  }
};
