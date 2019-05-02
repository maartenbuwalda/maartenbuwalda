import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './containers/App'
import store, { history } from './store/createStore'

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
), document.getElementById('root'))
