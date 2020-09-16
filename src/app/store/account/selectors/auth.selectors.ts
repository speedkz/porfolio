import { createSelector } from '@ngrx/store';
import { AuthState, getAccountState, AccountState } from 'app/store/account/reducers';

export const getAuthState = createSelector(
  getAccountState,
  (state: AccountState) => state.auth
);

export const getCurrentUser = createSelector(
  getAuthState,
  (state: AuthState) => state.entities
);

export const getAuthLoaded = createSelector(
  getAuthState,
  (state: AuthState) => state.loaded
);
