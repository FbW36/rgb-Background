import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { colorReducer } from "./reducers/colorReducer";

// const initialState = {};
export const store = createStore(
  colorReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
