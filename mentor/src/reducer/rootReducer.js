import authReducer from "./authReducer";
import questionReducer from "./questionReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  question: questionReducer
});

export default rootReducer;
