import { combineReducers } from "redux";
import logReducer from "./logReducer";

export default combineReducers({
  //what we are calling our state ffor log part
  log: logReducer,
});
