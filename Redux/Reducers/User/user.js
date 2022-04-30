import { USER_TYPE } from "../../Types/User/user";

const inisialState = {
  email: null,
  user_id: null,
  name: null,
  loading: true,
  // exp: null,
};

export const user = (state = inisialState, action) => {
  switch (action.type) {
    case USER_TYPE.LOADING_OFF_USER:
      return {
        ...state,
        loading: action.payload,
      };
    case USER_TYPE.LOADING_ON_USER:
      return {
        ...state,
        loading: action.payload,
      };
    case USER_TYPE.USER_INFO_TYPE:
      return action.payload;
    case USER_TYPE.USER_LOGOUT_TYPE:
      return action.payload;
    default:
      return state;
  }
};
