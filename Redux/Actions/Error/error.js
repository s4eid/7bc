import { ERROR_TYPE } from "../../Types/Error/error";

export const addError = (status, has) => async (dispatch) => {
  try {
    dispatch({ type: ERROR_TYPE.ADD_ERROR, payload: { status, has } });
  } catch (error) {
    // console.log(error);
  }
};
