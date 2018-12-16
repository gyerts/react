import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

import App from './App';
import './index.scss';
import { appStore, history } from "./store";


ReactDOM.render(
   <Provider store={appStore}>
      <ConnectedRouter store={appStore} history={history}>
         <BrowserRouter>
            <Switch>
               <Route exact path="/" component={App}/>
               <Route render={() => <h1>404, not found</h1>} />
            </Switch>
         </BrowserRouter>
      </ConnectedRouter>
   </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
