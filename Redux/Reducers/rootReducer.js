import { combineReducers } from "redux";
import { user } from "./User/user";
import { product } from "./Product";
import { products } from "./Products";
import { products_k } from "./Products_k";
import { products_l } from "./Products_l";
import { products_t } from "./Products_t";
import { error } from "./Error";

export default combineReducers({
  user,
  product,
  products,
  products_k,
  products_l,
  products_t,
  error,
});
