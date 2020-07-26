import { action, Action } from 'typesafe-actions';
import { AuthTypes, User } from './types';

export const signInRequest = (email: string, password: string): Action =>
  action(AuthTypes.SIGN_IN_REQUEST, { email, password });

export const signInSucess = (user: User): Action =>
  action(AuthTypes.SIGN_IN_SUCESS, { user });

export const signFailure = (): Action => action(AuthTypes.SIGN_FAILURE);

export const signOut = (): Action => action(AuthTypes.SIGN_OUT);
