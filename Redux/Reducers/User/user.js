import { USER_TYPE } from "../../Types/User/user";

const inisialState = {
  email: null,
  user_id: null,
  full_name: null,
  exp: null,
};

export const user = (state = inisialState, action) => {
  switch (action.type) {
    case USER_TYPE.USER_INFO_TYPE:
      return action.payload;
    default:
      return state;
  }
};
