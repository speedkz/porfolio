import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthReducer, AuthState } from './auth.reducer';
import { UsersReducer, UsersState } from './user.reducer';
export interface AccountState {
  users: UsersState;
  auth: AuthState;
}

export const getAccountState = createFeatureSelector<AccountState>(
  'account'
);

export const getAppState = createSelector(
  getAccountState,
  (state: AccountState) => state
);

export const reducers: ActionReducerMap<AccountState> = {
  users: UsersReducer,
  auth: AuthReducer
};

export * from './user.reducer';
export * from './auth.reducer';