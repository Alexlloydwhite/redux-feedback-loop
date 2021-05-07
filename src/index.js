import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// initial state of the store is EMPTY :)
const initState = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

// reducer holds state of each component
// switch statement checks dispatch
const feedbackReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return {
                ...store,
                feeling: action.payload
            }
        case 'SET_UNDERSTANDING':
            return {
                ...store,
                understanding: action.payload
            }
        case 'SET_SUPPORT':
            return {
                ...store,
                support: action.payload
            }
        case 'SET_COMMENTS':
            return {
                ...store,
                comments: action.payload
            }
        default: state;
    }
    return state;
}

// store contains one reducer, logger improves our console log
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
