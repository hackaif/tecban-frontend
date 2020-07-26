import { Action } from 'redux';
import { TransactionTypes, TransactionState, Transaction } from './types';

const INITIAL_STATE: TransactionState = {
  transactions: null,
  loading: false,
};

interface AuthActionProps extends Action {
  payload: {
    transactions: Transaction;
  };
}

export default function auth(
  state = INITIAL_STATE,
  action: AuthActionProps,
): TransactionState {
  switch (action.type) {
    case TransactionTypes.TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TransactionTypes.TRANSACTIONS_SUCESS:
      return {
        ...state,
        transactions: action.payload.transactions,
        loading: false,
      };
    case TransactionTypes.TRANSACTIONS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
