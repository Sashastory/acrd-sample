import * as actionTypes from './actionTypes';

export const fetchRulesStart = () => {
    return {
        type: actionTypes.FETCH_RULES_START
    }
}

export const fetchRulesSuccess = (rules) => {
    return {
        type: actionTypes.FETCH_RULES_SUCCESS,
        rules: rules
    }
}

export const fetchRulesFail = (error) => {
    return {
        type: actionTypes.FETCH_RULES_FAIL,
        error: error
    }
}

//TODO: fetch rules from backend 
export const fetchRules = () => {
    return dispatch => {
        dispatch(fetchRulesStart());
        dispatch(fetchRulesSuccess({}));
        // dispatch(fetchRulesFail());
    }
}

export const fetchColumnDataStart = () => {
    return {
        type: actionTypes.FETCH_COLUMN_DATA_START
    }
}

export const fetchColumnDataSuccess = (columnData) => {
    return {
        type: actionTypes.FETCH_COLUMN_DATA_SUCCESS,
        columndData: columnData
    }
}

export const fetchColumnDataFail = (error) => {
    return {
        type: actionTypes.FETCH_COLUMN_DATA_FAIL,
        error: error
    }
}

//TODO: fetch column data from backend
export const fetchColumnData = () => {
    return dispatch => {
        dispatch(fetchColumnDataStart());
        dispatch(fetchColumnDataSuccess({}));
        // dispatch(fetchColumnDataFail());
    }
}

export const showRuleDetails = (rule) => {
    return {
        type: actionTypes.SHOW_RULE_DETAILS,
        rule: rule
    }
}

export const changeSelectedAmount = (numSelected) => {
    return {
        type: actionTypes.CHANGE_SELECTED_AMOUNT,
        numSelected: numSelected
    }
}

export const sortRuleTable = (rules, order, orderBy) => {
    return {
        type: actionTypes.SORT_RULE_TABLE,
        rules: rules,
        order: order,
        orderBy: orderBy
    }
}

export const sortTableByColumn = () => {

}