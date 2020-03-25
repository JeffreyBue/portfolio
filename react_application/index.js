import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

import rootReducer from './rootReducer';

import App from 'App';

const initialState = {},
	enhancer = compose(applyMiddleware(thunk)),
	store = createStore(rootReducer, initialState, enhancer);

/*
 * Smash together Redux store, router, shell layout, and views === Application
 */
const ReactApplication = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default ReactApplication;