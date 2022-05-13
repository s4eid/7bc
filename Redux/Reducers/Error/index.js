import { ERROR_TYPE } from "../../Types/Error/error";

const inisialState = {
  status: null,
  has: false,
};

export const error = (state = inisialState, action) => {
  switch (action.type) {
    case ERROR_TYPE.ADD_ERROR:
      return {
        ...state,
        status: action.payload.status,
        has: action.payload.has,
      };
    default:
      return state;
  }
};
