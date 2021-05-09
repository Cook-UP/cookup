import { combineReducers } from "redux";

import shoppingReducer from "./ShoppingCart/shoppingCart-Reducer";
// puts all the Reducers in once place
const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
