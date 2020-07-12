import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk';

import userReducer from "./reducers/userReducer";

import covidReducers from "./reducers/covidReducers";
import newsReducers from "./reducers/newsReducers";

const rootReducer = combineReducers({
    covid: covidReducers,
    user: userReducer,
    news: newsReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
    console.log("from index.js")
});

export default store;