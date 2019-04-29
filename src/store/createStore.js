import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { reducers } from '../reducers'
import color from '../middleware/color'
import thunk from 'redux-thunk'

export const history = createHistory()
const middleware = [
  thunk,
  color,
]
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)
const store = createStore(reducers, composedEnhancers)

export default store
