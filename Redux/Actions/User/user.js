import { USER_TYPE } from "../../Types/User/user";
import { getUser } from "../../../Functions/userC";

export const getUserInfo = () => async (dispatch) => {
  try {
    const user = await getUser("refreshToken");
    dispatch({ type: USER_TYPE.USER_INFO_TYPE, payload: user });
  } catch (error) {
    // console.log(error);
  }
};
