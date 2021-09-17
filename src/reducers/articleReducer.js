const initialState = {
    singleArticleData: {}
}

const articleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_ARTICLE':
            return {
                ...state,
                singleArticleData: action.payload
            }
            default:
                return state;
    }
}

export default articleReducer;