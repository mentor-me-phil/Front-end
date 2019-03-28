import authReducer from "./authReducer";
import questionReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  question: questionReducer
});

export default rootReducer;
