import { TEACHER_TYPE } from "../../Types/Teacher/teacherTypes";

const inisialState = {
  email: null,
  id: null,
  exp: null,
  role: null,
};

export const teacher = (state = inisialState, action) => {
  switch (action.type) {
    case TEACHER_TYPE.TEACHER_INFO_TYPE:
      return action.payload;
    default:
      return state;
  }
};
