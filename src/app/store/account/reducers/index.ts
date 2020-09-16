import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersReducer, UsersState } from './user.reducer';
export interface AccountState {
  users: UsersState;
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
};

export * from './user.reducer';