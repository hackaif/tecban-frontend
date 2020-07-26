// import { Action } from 'redux';
import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put, all, getContext } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { gql } from '@apollo/client';
import { TransactionTypes } from './types';

import { transactionsSucess, transactionsFailure } from './actions';

// interface SignInProps extends Action {
//   payload: {
//     email: string;
//     password: string;
//   };
// }

export function* getAllExtractsRequest(): SagaIterator<void> {
  try {
    const client = yield getContext('client');

    const query = gql`
      query {
        getAllExtracts {
          CreditDebitIndicator
          Amount
          BookingDateTime
          TransactionInformation
        }
      }
    `;

    const {
      data: { getAllExtracts },
    } = yield call(client.query, {
      query,
      fetchPolicy: 'no-cache',
    });

    if (getAllExtracts === null) {
      throw Error('Falha na autenticação Ta ok');
    }

    yield put(transactionsSucess(getAllExtracts));
  } catch (error) {
    Alert.alert('Falha na autentificação', 'Usuário não encontrado');
    yield put(transactionsFailure());
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function signOut(): void {}

export default all([
  takeLatest(TransactionTypes.TRANSACTIONS_REQUEST, getAllExtractsRequest),
  // takeLatest(AuthTypes.SIGN_OUT, signOut),
]);
