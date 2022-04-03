import { combineReducers } from "redux";
import { user } from "./User/user";
import { product } from "./Product";
import { loading } from "./Loading";
import { products } from "./Products";
import { products_k } from "./Products_k";

export default combineReducers({
  user,
  product,
  loading,
  products,
  products_k,
});
