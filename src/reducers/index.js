import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import articleReducer from "./articleReducer";
import resultsReducer from './resultsReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['article','results']
}

const rootReducer = combineReducers({
    article: articleReducer,
    results: resultsReducer
})

export default persistReducer(persistConfig, rootReducer);