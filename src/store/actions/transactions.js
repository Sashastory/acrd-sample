import * as actionTypes from "./actionTypes";

export const fetchTransactionStart = () => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_START
  };
};

export const fetchTransactionsSuccess = transactions => {
  return {
    transactions: transactions,
    type: actionTypes.FETCH_TRANSACTIONS_SUCCESS
  };
};

export const fetchTransactionsFail = error => {
  return {
    error: error,
    type: actionTypes.FETCH_TRANSACTIONS_FAIL
  };
};

export const fetchTransactions = () => {
  return dispatch => {
    dispatch(fetchTransactionStart());
    dispatch(fetchTransactionsSuccess({}));
  };
};

export const changeSelectedTransactionAmount = selectedId => {
  return {
    selectedId: selectedId,
    type: actionTypes.CHANGE_SELECTED_TRANSACTION_AMOUNT
  };
};

export const sortTransactionTable = property => {
  return {
    property: property,
    type: actionTypes.SORT_TRANSACTION_TABLE
  };
};

export const selectAllTransactions = checked => {
  return {
    checked: checked,
    type: actionTypes.SELECT_ALL_TRANSACTIONS
  };
};
