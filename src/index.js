import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import './index.sass';

import store from './store/createStore'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={Container}>
      	
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
