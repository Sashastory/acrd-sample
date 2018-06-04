import * as actionTypes from "./actionTypes";
import axios from '../../axios/axios-transactions';

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
        console.log("Trying to fetch transactions from backend...");
        axios.get().then(
            response => {
                dispatch(fetchTransactionsSuccess(response.data))
            }
        ).catch(error => {
            dispatch(fetchTransactionsFail(error))
        });
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

export const filterTransactionTable = filter => {
    return {
        filter: filter,
        type: actionTypes.FILTER_TRANSACTION_TABLE
    };
};

