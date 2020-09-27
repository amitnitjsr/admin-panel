import { combineReducers } from "redux";
import auth from "./auth";
import dashboard from './dashboard';
import profile from "./profile";
import user from './user';
export default combineReducers({
    auth,
    dashboard,
    profile,
    user,
})