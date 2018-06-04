import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";

const initialState = {
    transactions: [],
    transaction: {},
    selected: [],
    filter: {
        cardNumber: "",
        dateAfter: "",
        dateBefore: "",
        flag: ""
    },
    order: "asc",
    orderBy: "dateTime",
    rowCount: 10,
    loading: false,
    error: false
};

const fetchTransactionsStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchTransactionsSuccess = (state, action) => {
    return updateObject(state, {
        transactions: action.transactions,
        loading: false
    });
};

const fetchTransactionsFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const changeSelectedTransactionAmount = (state, action) => {
    const selectedIndex = state.selected.indexOf(action.selectedId);
    let newSelected = [];

    if (selectedIndex === -1) {
        newSelected = newSelected.concat(state.selected, action.selectedId);
    } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(state.selected.slice(1));
    } else if (selectedIndex === state.selected.length - 1) {
        newSelected = newSelected.concat(state.selected.slice(0, -1));
    } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            state.selected.slice(0, selectedIndex),
            state.selected.slice(selectedIndex + 1)
        );
    }
    return updateObject(state, {selected: newSelected});
};

const sortTransactionTable = (state, action) => {
    const orderBy = action.property;
    let order = "desc";

    if (state.orderBy === orderBy && state.order === "desc") {
        order = "asc";
    }

    const newTransactions =
        order === "desc"
            ? state.transactions.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
            : state.transactions.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    return updateObject(state, {
        transactions: newTransactions,
        order: order,
        orderBy: orderBy
    });
};

const selectAllTransactions = (state, action) => {
    if (action.checked) {
        return updateObject(state, {selected: state.transactions.map(r => r.id)});
    }
    return updateObject(state, {selected: []});
};

const filterTransactionsStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const filterTransactionsSuccess = (state, action) => {
    return updateObject(state, {
            transactions: action.transactions,
            loading: true
        });
};

const filterTransactionsFail = (state, action) => {
    return updateObject(state, {loading: false});
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRANSACTIONS_START:
            return fetchTransactionsStart(state, action);

        case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
            return fetchTransactionsSuccess(state, action);

        case actionTypes.FETCH_TRANSACTIONS_FAIL:
            return fetchTransactionsFail(state, action);

        case actionTypes.CHANGE_SELECTED_TRANSACTION_AMOUNT:
            return changeSelectedTransactionAmount(state, action);

        case actionTypes.SORT_TRANSACTION_TABLE:
            return sortTransactionTable(state, action);

        case actionTypes.SELECT_ALL_TRANSACTIONS:
            return selectAllTransactions(state, action);

        case actionTypes.FILTER_TRANSACTIONS_START:
            return filterTransactionsStart(state, action);

        case actionTypes.FILTER_TRANSACTIONS_SUCCESS:
            return filterTransactionsSuccess(state, action);

        case actionTypes.FILTER_TRANSACTIONS_FAIL:
            return filterTransactionsFail(state, action);

        default:
            return state;
    }
};

export default reducer;
