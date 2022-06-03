import { combineReducers } from "redux";
import xucXacReducer from "./xucXacReducer";
const rootReducer = combineReducers({
    xucXac : xucXacReducer
})
export default rootReducer