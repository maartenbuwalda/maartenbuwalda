import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'
import store, { history } from './store/createStore'
import { ConnectedRouter } from 'react-router-redux'

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer/>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
