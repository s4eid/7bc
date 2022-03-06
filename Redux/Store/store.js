import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/rootReducer";

const inisialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  inisialState,
  compose(applyMiddleware(...middleware))
);

export default store;
