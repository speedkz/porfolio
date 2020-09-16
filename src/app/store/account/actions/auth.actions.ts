import { Action } from '@ngrx/store';

export const LOGIN = '[AUTH] LOGIN';
export const LOGIN_SUCCESS = '[AUTH] LOGIN SUCCESS';
export const LOGIN_FAILED = '[AUTH] LOGIN FAILED';

export const LOGOUT = '[AUTH] LOGOUT';
export const LOGOUT_SUCCESS = '[AUTH] LOGOUT SUCCESS';
export const LOGOUT_FAILED = '[AUTH] LOGOUT FAILED';

export class Login implements Action {
    readonly type = LOGIN

    constructor(public payload?: any) {

    }
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: any) {
    }
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;

    constructor(public payload: string) {
    }
}

export class Logout implements Action {
    readonly type = LOGOUT

    constructor(public payload?: any) {

    }
}

export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS;

    constructor(public payload: any) {
    }
}

export class LogoutFailed implements Action {
    readonly type = LOGOUT_FAILED;

    constructor(public payload: string) {
    }
}

export type AuthsActionsAll
    = Login
    | LoginSuccess
    | LoginFailed
    | Logout
    | LogoutSuccess
    | LogoutFailed;