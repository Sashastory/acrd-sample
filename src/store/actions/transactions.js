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

export const filterTransactionsStart = () => {
    return {
        type: actionTypes.FILTER_TRANSACTIONS_START
    }
};

export const filterTransactionsSuccess = (transactions) => {
    return {
        transactions: transactions,
        type: actionTypes.FILTER_TRANSACTIONS_SUCCESS
    }
};

export const filterTransactionsFail = () => {
    return {
        type: actionTypes.FILTER_TRANSACTIONS_FAIL
    }
};

export const filterTransactionTable = (filter, value) => {
    return dispatch => {
        dispatch(filterTransactionsStart());
        const url = `/transaction?${filter}=${value}`;
        axios.get(url)
            .then(response => {
                    dispatch(filterTransactionsSuccess(response.data))
                }
            ).catch(error => {
            dispatch(filterTransactionsFail(error))
        });
    };
};

