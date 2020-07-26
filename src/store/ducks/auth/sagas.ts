import { Action } from 'redux';
import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put, all, getContext } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { gql } from '@apollo/client';
import { AuthTypes } from './types';

import { signInSucess, signFailure } from './actions';

interface SignInProps extends Action {
  payload: {
    email: string;
    password: string;
  };
}

export function* signIn({
  payload: { email, password },
}: SignInProps): SagaIterator<void> {
  try {
    const client = yield getContext('client');

    const query = gql`
      query {
        login(input: {
          email: "${email}",
          password: "${password}"
        })
        {
          name,
          email,
          accounts {
            accountId
            bank
  	      }
        }
      }
    `;

    const {
      data: { login },
    } = yield call(client.query, {
      query,
      fetchPolicy: 'no-cache',
    });

    if (login === null) {
      throw Error('Falha na autenticação Ta ok');
    }

    yield put(signInSucess(login));
  } catch (error) {
    Alert.alert('Falha na autentificação', 'Usuário não encontrado');
    yield put(signFailure());
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function signOut(): void {}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_OUT, signOut),
]);
