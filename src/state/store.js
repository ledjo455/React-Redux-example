import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
// store takes as arguments reducers and a default state
export const store = createStore(reducers, {}, applyMiddleware(thunk));
