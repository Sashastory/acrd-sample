import * as actionTypes from '../actions/actionTypes';

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
    rule: {},
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
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

        case actionTypes.SHOW_RULE_DETAILS:
            return {
                ...state,
                rule: action.rule
            };
        default:
            return state;
    }
}

export default reducer;