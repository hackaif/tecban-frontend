import { Action } from 'redux';
import { AuthState, AuthTypes, User } from './types';

const INITIAL_STATE: AuthState = {
  user: null,
  signed: false,
  loading: false,
};

interface AuthActionProps extends Action {
  payload: {
    user: User;
  };
}

export default function auth(
  state = INITIAL_STATE,
  action: AuthActionProps,
): AuthState {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AuthTypes.SIGN_IN_SUCESS:
      return {
        ...state,
        user: action.payload.user,
        signed: true,
        loading: false,
      };
    case AuthTypes.SIGN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case AuthTypes.SIGN_OUT:
      return {
        ...state,
        user: null,
        signed: false,
        loading: false,
      };
    default:
      return state;
  }
}
