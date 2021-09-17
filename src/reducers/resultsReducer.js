const initialState = {
    resultsData: {}
}

const articleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_RESULTS':
            return {
                ...state,
                resultsData: action.payload
            }
            default:
                return state;
    }
}

export default articleReducer;