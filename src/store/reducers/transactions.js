import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  transactions: [
    {
      id: 1,
      cardNumber: "5222123456784567",
      dateTime: "2018/02/01 10:10:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    },
    {
      id: 2,
      cardNumber: "5222123456784568",
      dateTime: "2018/02/01 10:11:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    },
    {
      id: 3,
      cardNumber: "5222123456784561",
      dateTime: "2018/02/01 10:12:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    },
    {
      id: 4,
      cardNumber: "5222123456784562",
      dateTime: "2018/02/01 10:13:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    },
    {
      id: 5,
      cardNumber: "5222123456784563",
      dateTime: "2018/02/01 10:14:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    },
    {
      id: 6,
      cardNumber: "5222123456784564",
      dateTime: "2018/02/01 10:15:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    },
    {
      id: 7,
      cardNumber: "5222123456784565",
      dateTime: "2018/02/01 10:16:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    },
    {
      id: 8,
      cardNumber: "5222123456784566",
      dateTime: "2018/02/01 10:17:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    },
    {
      id: 9,
      cardNumber: "5222123456784560",
      dateTime: "2018/02/01 10:18:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    },
    {
      id: 10,
      cardNumber: "5222123456784517",
      dateTime: "2018/02/01 10:19:00",
      otv: "246",
      amount: "0.50",
      currency: "810",
      operationCode: "ZU",
      rules: "",
      score: "73",
      city: "MOSCOW",
      category: "6010",
      institute: "211221",
      merchantName: "TEST AMEX RS IP",
      terminalId: "123456789"
    }
  ],
  transaction: {},
  selected: [],
  order: "asc",
  orderBy: "dateTime",
  rowCount: 10,
  loading: false,
  error: false
};

const fetchTransactionsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchTransactionsSuccess = (state, action) => {
  return updateObject(state, {
    // rules: action.rules,
    loading: false
  });
};

const fetchTransactionsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const showTransactionDetails = (state, action) => {
  return updateObject(state, { transaction: action.transaction });
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
  return updateObject(state, { selected: newSelected });
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
    return updateObject(state, { selected: state.transactions.map(r => r.id) });
  }
  return updateObject(state, { selected: [] });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TRANSACTIONS_START:
      return fetchTransactionsStart(state, action);

    case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
      return fetchTransactionsSuccess(state, action);

    case actionTypes.FETCH_TRANSACTIONS_FAIL:
      return fetchTransactionsFail(state, action);

    case actionTypes.SHOW_TRANSACTION_DETAILS:
      return showTransactionDetails(state, action);

    case actionTypes.CHANGE_SELECTED_TRANSACTION_AMOUNT:
      return changeSelectedTransactionAmount(state, action);

    case actionTypes.SORT_TRANSACTION_TABLE:
      return sortTransactionTable(state, action);

    case actionTypes.SELECT_ALL_TRANSACTIONS:
      return selectAllTransactions(state, action);

    default:
      return state;
  }
};

export default reducer;
