import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './containers/App'
import store, { history } from './store/createStore'
import { ConnectedRouter } from 'react-router-redux'

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
