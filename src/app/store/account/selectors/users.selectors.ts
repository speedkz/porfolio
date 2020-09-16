import { createSelector } from '@ngrx/store';
import { UsersState, getAccountState, AccountState } from 'app/store/account/reducers';

export const getUsersState = createSelector(
  getAccountState,
  (state: AccountState) => state.users
);

export const getUsers = createSelector(
  getUsersState,
  (state: UsersState) => state.entities
);

export const getUsersLoaded = createSelector(
  getUsersState,
  (state: UsersState) => state.loaded
);

export const getUsersArr = createSelector(
  getUsers,
  (entities) => entities
);
