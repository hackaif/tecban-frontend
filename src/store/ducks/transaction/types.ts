/**
 * ACTION TYPES
 */
export enum TransactionTypes {
  TRANSACTIONS_REQUEST = '@transactions/TRANSACTIONS_REQUEST',
  TRANSACTIONS_SUCESS = '@transactions/TRANSACTIONS_SUCESS',
  TRANSACTIONS_FAILURE = '@transactions/TRANSACTIONS_FAILURE',

  TRANSACTION_BY_ACCOUNT_REQUEST = '@transactions/TRANSACTION_BY_ACCOUNT_REQUEST',
  TRANSACTION_BY_ACCOUNT_SUCESS = '@transactions/TRANSACTION_BY_ACCOUNT_SUCESS',
  TRANSACTION_BY_ACCOUNT_FAILURE = '@transactions/TRANSACTION_BY_ACCOUNT_FAILURE',
}

/**
 * DATA TYPES
 */

export interface Transaction {
  CreditDebitIndicator: 'Credit' | 'Debit';
  Amount: number;
  BookingDateTime: Date;
  TransactionInformation: string;
}

/**
 * STATE Type
 */

export interface TransactionState {
  readonly transactions: Transaction | null;
  readonly loading: boolean;
}
