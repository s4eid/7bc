import { LOADING_TYPE } from "../../Types/Loading";

const inisialState = {
  loading: false,
};

export const loading = (state = inisialState, action) => {
  let item = action.payload;
  switch (action.type) {
    case LOADING_TYPE.LOADING_ON_TYPE:
      return { loading: item };
    case LOADING_TYPE.LOADING_OFF_TYPE:
      return { loading: item };
    default:
      return state;
  }
};
