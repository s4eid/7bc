import { PRODUCT_TYPE } from "../../Types/Product";

const inisialState = {
  cartItems: [],
  cartItemProperty: [],
  loading: false,
  cartDetails: {
    shipping: 0,
    discount: 0,
    total: 0,
    price: 0,
  },
};

export const product = (state = inisialState, action) => {
  console.log(action.payload);
  let item = action.payload;
  switch (action.type) {
    case PRODUCT_TYPE.ADD_PRODUCT_TYPE:
      let found = state.cartItems.find((s) => s == action.payload);
      if (!found) {
        const has = localStorage.getItem("cartItems");
        if (has) {
          const _has = JSON.parse(has);
          let foundR = _has.find((s) => s == item);
          if (!foundR) {
            _has.push(item);
            localStorage.setItem("cartItems", JSON.stringify(_has));
            return {
              ...state,
              cartItems: [...state.cartItems, item],
            };
          }
          return {
            ...state,
          };
        } else {
          localStorage.setItem("cartItems", JSON.stringify([item]));
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
      }
    case PRODUCT_TYPE.GET_PRODUCTS_TYPE:
      const price = item.prices.reduce((p, c) => p + c);
      const total =
        price + state.cartDetails.discount + state.cartDetails.shipping;
      return {
        ...state,
        cartItems: [...state.cartItems],
        cartItemProperty: item._item,
        cartDetails: {
          ...state.cartDetails,
          total,
          price,
        },
      };
    case PRODUCT_TYPE.PLUS_PRODUCT_TYPE:
      var foundIndex = state.cartItemProperty.findIndex(
        (x) => x.product_id === item
      );
      if (
        state.cartItemProperty[foundIndex].pieces - 1 >
        state.cartItemProperty[foundIndex].quantity
      ) {
        let newArray = state.cartItemProperty;
        newArray[foundIndex].quantity = newArray[foundIndex].quantity + 1;
        let price = state.cartDetails.price + newArray[foundIndex].price;
        let total =
          price + state.cartDetails.discount + state.cartDetails.shipping;
        return {
          ...state,
          cartItems: [...state.cartItems],
          cartItemProperty: newArray,
          cartDetails: {
            ...state.cartDetails,
            price,
            total,
          },
        };
      } else return state;
    case PRODUCT_TYPE.MINUS_PRODUCT_TYPE:
      var foundIndex = state.cartItemProperty.findIndex(
        (x) => x.product_id === item
      );
      if (state.cartItemProperty[foundIndex].quantity > 1) {
        let newArray = state.cartItemProperty;
        newArray[foundIndex].quantity = newArray[foundIndex].quantity - 1;
        let price = state.cartDetails.price - newArray[foundIndex].price;
        let total =
          price + state.cartDetails.discount + state.cartDetails.shipping;
        return {
          ...state,
          cartItems: [...state.cartItems],
          cartItemProperty: newArray,
          cartDetails: {
            ...state.cartDetails,
            price,
            total,
          },
        };
      } else return state;
    case PRODUCT_TYPE.LOADING_PRODUCTS_TRUE:
      return {
        ...state,
        cartItemProperty: [...state.cartItemProperty],
        cartItems: [...state.cartItems],
        loading: item,
      };
    case PRODUCT_TYPE.LOADING_PRODUCTS_FALSE:
      return {
        ...state,
        cartItemProperty: [...state.cartItemProperty],
        cartItems: [...state.cartItems],
        loading: item,
      };
    default:
      return state;
  }
};
