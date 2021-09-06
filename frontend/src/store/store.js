import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
} from "../reducers/productsReducer";

import { loginReducer } from "../reducers/userReducer";
const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  userLogin: loginReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
