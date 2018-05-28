import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  rules: [
    {
      id: 15,
      group: 11,
      signal: "NO",
      riskValue: 34,
      beginDate: "03.04.2018",
      endDate: "27.04.2018",
      type: "save precedent",
      author: "alfa_iss",
      description: "test"
    },
    {
      id: 14,
      group: 12,
      signal: "NO",
      riskValue: 35,
      beginDate: "05.04.2018",
      endDate: "28.04.2018",
      type: "save_precendent",
      authore: "alfa_iss",
      description: "second test"
    },
    {
      id: 22,
      group: 5,
      signal: "NO",
      riskValue: 15,
      beginDate: "08.04.2018",
      endDate: "01.05.2018",
      type: "save_precendent",
      authore: "alfa_iss",
      description: "third test"
    }
  ],
  rule: {
    id: 15,
    group: 11,
    signal: "NO",
    riskValue: 34,
    beginDate: "03.04.2018",
    endDate: "27.04.2018",
    type: "save precedent",
    author: "alfa_iss",
    description: "test"
  },
  columnData: [
    { id: "id", numeric: false, disablePadding: true, label: "ID" },
    { group: "group", numeric: false, disablePadding: false, label: "Группа" },
    {
      signal: "signal",
      numeric: false,
      disablePadding: false,
      label: "Сигнал"
    },
    {
      riskValue: "riskValue",
      numeric: false,
      disablePadding: false,
      label: "Значение риска"
    },
    {
      beginDate: "beginDate",
      numeric: false,
      disablePadding: false,
      label: "Дата С"
    },
    {
      endDate: "endDate",
      numeric: false,
      disablePadding: false,
      label: "Дата По"
    },
    { type: "type", numeric: false, disablePadding: false, label: "Тип" },
    { author: "author", numeric: false, disablePadding: false, label: "Автор" },
    {
      description: "description",
      numeric: false,
      disablePadding: false,
      label: "Описание"
    }
  ],
  selected: [],
  order: "asc",
  orderBy: "group",
  rowCount: 3,
  loading: false,
  error: false
};

const fetchRulesStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchRulesSuccess = (state, action) => {
  return updateObject(state, {
    // rules: action.rules
    loading: false
  });
};

const fetchRulesFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchColumnDataStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchColumnDataSuccess = (state, action) => {
  return updateObject(state, {
    // columnData: action.columnData,
    loading: false
  });
};

const fetchColumnDataFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const showRuleDetails = (state, action) => {
  return updateObject(state, { rule: action.rule });
};

const changeSelectedAmount = (state, action) => {
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

//TODO: Finish sorting for dates
const sortRuleTable = (state, action) => {
  const orderBy = action.property;
  let order = "desc";

  if (state.orderBy === orderBy && state.order === "desc") {
    order = "asc";
  }

  const newRules =
    order === "desc"
      ? state.rules.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
      : state.rules.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

  return updateObject(state, {
    rules: newRules,
    order: order,
    orderBy: orderBy
  });
};

const selectAllRules = (state, action) => {
  console.log(action.checked);
  if (action.checked) {
    return updateObject(state, { selected: state.rules.map(r => r.id) });
  }
  return updateObject(state, { selected: [] });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RULES_START:
      return fetchRulesStart(state, action);

    case actionTypes.FETCH_RULES_SUCCESS:
      return fetchRulesSuccess(state, action);

    case actionTypes.FETCH_RULES_FAIL:
      return fetchRulesFail(state, action);

    case actionTypes.FETCH_COLUMN_DATA_START:
      return fetchColumnDataStart(state, action);

    case actionTypes.FETCH_COLUMN_DATA_SUCCESS:
      return fetchColumnDataSuccess(state, action);

    case actionTypes.FETCH_COLUMN_DATA_FAIL:
      return fetchColumnDataFail(state, action);

    case actionTypes.SHOW_RULE_DETAILS:
      return showRuleDetails(state, action);

    case actionTypes.CHANGE_SELECTED_AMOUNT:
      return changeSelectedAmount(state, action);

    case actionTypes.SORT_RULE_TABLE:
      return sortRuleTable(state, action);

    case actionTypes.SELECT_ALL_RULES:
      return selectAllRules(state, action);

    default:
      return state;
  }
};

export default reducer;
