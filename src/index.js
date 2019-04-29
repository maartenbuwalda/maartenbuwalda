import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './containers/App'
import store, { history } from './store/createStore'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter history={history}>
      <App/>
    </HashRouter>
  </Provider>
), document.getElementById('root'))
