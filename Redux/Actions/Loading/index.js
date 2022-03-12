import { LOADING_TYPE } from "../../Types/Loading";

export const loading = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_TYPE.LOADING_ON_TYPE,
      payload: true,
    });
  } catch (error) {}
};
export const notLoading = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_TYPE.LOADING_OFF_TYPE,
      payload: false,
    });
  } catch (error) {}
};
