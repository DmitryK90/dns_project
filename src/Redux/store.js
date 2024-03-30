import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import navReducer from "./navReducer";
import mainReducer from "./mainReducer";

let reducers = combineReducers({
  navReducer: navReducer,
  mainReducer: mainReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;
