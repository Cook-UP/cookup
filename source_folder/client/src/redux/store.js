import { createStore } from "redux";
// allows for the react-app redux state to be visbile in web browsers such as chrome 
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
// the store is bascially  the one centralized place where all of the data is stored for the glboal state in redux 
const store = createStore(rootReducer, composeWithDevTools());

export default store;
