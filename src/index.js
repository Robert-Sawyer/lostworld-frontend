import React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authReducer from './store/reducers/auth';
import countriesReducer from './store/reducers/countries';
import followingUsersReducer from './store/reducers/followingUsers'
import travelPlansReducer from './store/reducers/travelPlans';
import articlesReducer from './store/reducers/articles';
import albumsReducer from './store/reducers/albums';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    countries: countriesReducer,
    followingUsers: followingUsersReducer,
    travelPlans: travelPlansReducer,
    articles: articlesReducer,
    albums: albumsReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
