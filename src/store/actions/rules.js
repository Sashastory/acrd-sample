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

//TODO: fetch rules from backend using dispatch
export const fetchRules = () => {
    return dispatch => {
        dispatch(fetchRulesStart());
        dispatch(fetchRulesSuccess({}));
        // dispatch(fetchRulesFail())
    }
}

export const showRuleDetails = (rule) => {
    return {
        type: actionTypes.SHOW_RULE_DETAILS,
        rule: rule
    }
}