import { USER_TYPE } from "../../Types/User/user";
import { getUser } from "../../../Functions/userC";
import signOut from "../../../Functions/signOut/signOut";

export const getUserInfo = () => async (dispatch) => {
  try {
    const user = await getUser("refreshToken");
    dispatch({ type: USER_TYPE.USER_INFO_TYPE, payload: user });
  } catch (error) {
    // console.log(error);
  }
};

export const logoutUser = (router) => async (dispatch) => {
  try {
    signOut(router);
    dispatch({ type: USER_TYPE.USER_LOGOUT_TYPE, payload: null });
  } catch (error) {
    // console.log(error);
  }
};
