import * as AuthActions from "app/store/account/actions/auth.actions"

export interface AuthState {
  entities?: {
    user: any
  }
  loading: boolean
  loaded: boolean
}

export const AuthInitialState: AuthState = {
  entities: {
    user: "wendy",
  },
  loaded: false,
  loading: false
}

export function AuthReducer(state = AuthInitialState, action: AuthActions.AuthsActionsAll): AuthState {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case AuthActions.LOGIN_SUCCESS:
      const users = action.payload;
      alert(users)

      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case AuthActions.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state
  }
}