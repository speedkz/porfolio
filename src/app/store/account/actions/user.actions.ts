import { Action } from '@ngrx/store';

export const GET_USERS = '[USERS] GET USERS';
export const GET_USERS_SUCCESS = '[USERS] GET USERS SUCCESS';
export const GET_USERS_FAILED = '[USERS] GET USERS FAILED';

export class GetUsers implements Action {
  readonly type = GET_USERS

  constructor(public payload?: any) {

  }
}

export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class GetUsersFailed implements Action {
  readonly type = GET_USERS_FAILED;

  constructor(public payload: string) {
  }
}

export type UsersActionsAll
  = GetUsers
  | GetUsersSuccess
  | GetUsersFailed;