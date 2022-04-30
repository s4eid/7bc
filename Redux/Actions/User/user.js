import { USER_TYPE } from "../../Types/User/user";
import { getUser } from "../../../Functions/userC";
import signOut from "../../../Functions/signOut/signOut";

export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch({ type: USER_TYPE.LOADING_ON_USER, payload: true });
    const user = await getUser("refreshToken");
    dispatch({ type: USER_TYPE.USER_INFO_TYPE, payload: user });
    dispatch({ type: USER_TYPE.LOADING_OFF_USER, payload: false });
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
