import { UserState, INITIAL_USER_STATE, userReducer } from "./modules/user/store";
import { ReduxService } from "./services/redux/redux.service";
import { NgRedux } from "@angular-redux/store";
import { combineReducers } from "redux";

export interface AppState {
    userState: UserState;
}

export const INITIAL_STATE = {
    userState: INITIAL_USER_STATE
}


export const rootReducer = combineReducers({
    user: userReducer
})