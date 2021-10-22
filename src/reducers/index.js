import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todoItem from "./todos";

export default combineReducers({ todoItem, visibilityFilter });


