import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    payload : [],
    isError: false
}

// reducer-
export const reducer = (state=initState, action) => {
    const {type, payload} = action;

    switch(type){
        // get-
        case types.GET_REQUEST :
            return {...state, isLoading: true}

        case types.GET_SUCCESS :
            return {...state, isLoading: false, payload}

        case types.GET_ERROR :
            return {...state, isLoading: false, isError: true, payload}

        default :
            return {...state}
    }
}