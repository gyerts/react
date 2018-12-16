import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from './app';


export const reducer = combineReducers({
   // each react application require routing
   routing: routerReducer,

   // test reducer to show functionality
   counter: counterReducer,
} as any); // fixme 'as any' workaround found here https://github.com/reduxjs/redux/issues/2709
