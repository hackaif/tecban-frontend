/**
 * ACTION TYPES
 */
export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCESS = '@auth/SIGN_IN_SUCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
  SIGN_OUT = '@auth/SIGN_OUT',
}

/**
 * DATA TYPES
 */

export interface User {
  id: string;
  email: string;
  name: string;
}

/**
 * STATE Type
 */

export interface AuthState {
  readonly user: User | null;
  readonly signed: boolean;
  readonly loading: boolean;
}
