import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { appStore, history } from "./store";

import App from './App';
import './index.scss';


ReactDOM.render(
   <Provider store={appStore}>
      <ConnectedRouter history={history}>
         <App />
      </ConnectedRouter>
   </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
