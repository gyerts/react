import createHistory from 'history/createHashHistory';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducers";


export const history = createHistory();
const router = routerMiddleware(history);
const middlewares = [router, thunk];
const isLogger = false;
if (isLogger && process.env.NODE_ENV === 'development') {
   const { logger } = require('redux-logger');
   middlewares.push(logger);
}
export const appStore = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
