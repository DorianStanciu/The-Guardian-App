// api key
let guardianApiKey;
if(process.env.NODE_ENV !== 'production') {
    guardianApiKey = process.env.REACT_APP_API_KEY;
}else{
    guardianApiKey = '9fbba8b7-5ca0-45a7-90de-68af76812ba5';
}

export const loadArticle = (apiUrl) => dispatch => {
        const apiBaseURL = 'https://content.guardianapis.com';
            fetch(`${apiUrl}?&show-fields=body,thumbnail&show-blocks=body&api-key=${guardianApiKey}`)
        .then(res => res.json())
        .then(article => dispatch({
            type: 'LOAD_ARTICLE',
            payload: article
        }))
}

export const loadResults = (text) => dispatch => {
    const apiBaseURL = 'https://content.guardianapis.com';
        fetch(`${apiBaseURL}/search?q=${text}&show-fields=thumbnail&api-key=${guardianApiKey}`)
    .then(res => res.json())
    .then(results => dispatch({
        type: 'LOAD_RESULTS',
        payload: results
    }))
}
