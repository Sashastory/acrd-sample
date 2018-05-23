import * as actionTypes from "../actions/actionTypes";

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
    { id: "id", numeric: true, disablePadding: true, label: "ID" },
    { group: "group", numeric: true, disablePadding: true, label: "Группа" },
    { signal: "signal", numeric: false, disablePadding: true, label: "Сигнал" },
    { riskValue: "riskValue", numeric: true, disablePadding: true, label: "Значение риска" },
    { beginDate: "beginDate", numeric: false, disablePadding: true, label: "Дата С" },
    { endDate: "endDate", numeric: false, disablePadding: true, label: "Дата По" },
    { type: "type", numeric: false, disablePadding: true, label: "Тип" },
    { author: "author", numeric: false, disablePadding: true, label: "Автор" },
    { description: "description", numeric: false, disablePadding: true, label: "Описание" },

  ],
  order: "desc",
  orderBy: "group",
  numSelected: 0,
  page: 0,
  rowsPerPage: 5,
  rowCount: 3,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RULES_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.FETCH_RULES_SUCCESS:
      return {
        ...state,
        // rules: action.rules,
        loading: false
      };

    case actionTypes.FETCH_RULES_FAIL:
      return {
        ...state,
        loading: false
      };
    
    case actionTypes.FETCH_COLUMN_DATA_START:
      return {
        ...state,
        loading: true
      };
    
    case actionTypes.FETCH_COLUMN_DATA_SUCCESS:
      return {
        ...state,
        // columnData: action.columnData,
        loading: false
      };
    
    case actionTypes.FETCH_COLUMN_DATA_FAIL:
      return {
        ...state,
        loading: false
      };
      
    case actionTypes.SHOW_RULE_DETAILS:
      return {
        ...state,
        rule: action.rule
      };

    case actionTypes.CHANGE_SELECTED_AMOUNT:
      return {
        ...state,
        numSelected: action.numSelected
      };

    case actionTypes.SORT_RULE_TABLE:
      return {
        ...state,
        rules: action.rules,
        order: action.order,
        orderBy: action.orderBy
      }
    default:
      return state;
  }
};

export default reducer;
