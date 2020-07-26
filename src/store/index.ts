import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { Store, createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import { AuthState } from './ducks/auth/types';
import { TransactionState } from './ducks/transaction/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  auth: AuthState;
  transaction: TransactionState;
}

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'tecBanApp',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
