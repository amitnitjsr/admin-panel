import { combineReducers } from "redux";
import auth from "./auth";
import dashboard from './dashboard';
import profile from "./profile";
import user from './user';
import cms from './cms';
import email from './email';
import setting from './setting';

export default combineReducers({
    auth,
    dashboard,
    profile,
    user,
    email,
    cms,
    setting
})