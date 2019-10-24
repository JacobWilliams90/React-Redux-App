const intialState = {
    taco: null,
    isLoading: false,
    err: null
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TACO:
            return {
                ...state,
                isLoading: true
            }
        case EAT_TACO:
            return {
                ...state,
                taco: action.payload,
                isLoading: false
            }
        case DROPPED_TACO: 
            return {
                ...state,
                err: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}