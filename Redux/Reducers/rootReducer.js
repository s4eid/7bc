import { combineReducers } from "redux";
import { user } from "./User/user";
import { product } from "./Product";
import { loading } from "./Loading";

export default combineReducers({
  user,
  product,
  loading,
});
