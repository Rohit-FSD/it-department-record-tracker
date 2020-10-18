import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
  //what we are calling our state for log part i.e log
  log: logReducer,
  tech: techReducer,
});
