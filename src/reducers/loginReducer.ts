import { LoginActionTypes, LoginAction } from "../actions/loginAction";
import { Reducer } from "react";

export interface ILogged{
    loggedIn:Boolean
}

export interface ILoggedState{
    readonly loggedIn: Boolean;
}

const initialLoginState: ILoggedState = {
    loggedIn: false
}

export const loggedReducer: Reducer<ILoggedState, LoginAction> = (
    state=initialLoginState, 
    action:any
) => {
    switch(action.type){
        case LoginActionTypes.SIGN_IN:
            return {
                ...state,
                loggedIn: action.loggedIn,
            };
        default:
            return state;
    }
}

export default loggedReducer;