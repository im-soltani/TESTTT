import { combineReducers } from "redux";
import authReducer from "./authReducer";
import annReducer from "./annReducer"
import profileReducer from "./profileReducer";
import artisanReducer from "./artisanReducer";

export default combineReducers({
  authReducer,annReducer,profileReducer,artisanReducer,
  
});