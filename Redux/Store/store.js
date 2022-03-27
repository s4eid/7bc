import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/rootReducer";
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    // I require this only in dev environment
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const inisialState = {};
// const middleware = [thunk];

const store = createStore(
  rootReducer,
  inisialState,
  bindMiddleware([thunk])
  // compose(applyMiddleware(...middleware))
);

export default store;
