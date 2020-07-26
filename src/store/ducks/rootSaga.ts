import { SagaIterator } from 'redux-saga';
import { all, setContext } from 'redux-saga/effects';

import client from '../../services/client';

import auth from './auth/sagas';
import transaction from './transaction/sagas';

export default function* rootSaga(): SagaIterator {
  yield setContext({ client });

  return yield all([auth, transaction]);
}
