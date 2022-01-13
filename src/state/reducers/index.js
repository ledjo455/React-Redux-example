import { combineReducers } from "redux";
// import reducer from "./accountReducer";
import accountReducer from "./accountReducer";

// key value pair object
const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;
