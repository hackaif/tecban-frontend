import { action, Action } from 'typesafe-actions';
import { TransactionTypes, Transaction } from './types';

export const transactionsRequest = (): Action =>
  action(TransactionTypes.TRANSACTIONS_REQUEST);

export const transactionsSucess = (transaction: Transaction): Action =>
  action(TransactionTypes.TRANSACTIONS_SUCESS, { transaction });

export const transactionsFailure = (): Action =>
  action(TransactionTypes.TRANSACTIONS_FAILURE);

export const transactionsByAccountRequest = (
  accountId: string,
  bank: number,
): Action =>
  action(TransactionTypes.TRANSACTION_BY_ACCOUNT_REQUEST, { accountId, bank });

export const transactionsByAccountSucess = (transaction: Transaction): Action =>
  action(TransactionTypes.TRANSACTION_BY_ACCOUNT_SUCESS, { transaction });

export const transactionsByAccountFailure = (): Action =>
  action(TransactionTypes.TRANSACTION_BY_ACCOUNT_FAILURE);
