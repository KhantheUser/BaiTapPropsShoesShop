import { combineReducers } from "redux";
import xucXacReducer from "./xucXacReducer";
import userHookReducer from "./userHookReducer";
const rootReducer = combineReducers({
    xucXac : xucXacReducer,
    userHook: userHookReducer,
})
export default rootReducer