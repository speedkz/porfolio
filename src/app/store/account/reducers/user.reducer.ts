import * as UsersActions from "app/store/account/actions/user.actions"

export interface UsersState {
  entities?: {
    username: string
    fullname: string
  }
  loading: boolean
  loaded: boolean
}

export const UsersInitialState: UsersState = {
  entities: {
    username: "wendy",
    fullname: "sett"
  },
  loaded: false,
  loading: false
}

export function UsersReducer(state = UsersInitialState, action: UsersActions.UsersActionsAll): UsersState {
  switch (action.type) {
    case UsersActions.GET_USERS:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case UsersActions.GET_USERS_SUCCESS:
      const users = action.payload;
      console.log(users)

      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case UsersActions.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state
  }
}