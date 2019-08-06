import { ILogged } from "../reducers/loginReducer";

export enum LoginActionTypes{
    SIGN_IN = 'SIGN_IN',
}

export interface ILoginGetAction{
    type: LoginActionTypes.SIGN_IN;
    loggedIn: ILogged;
}

export type LoginAction = ILoginGetAction;