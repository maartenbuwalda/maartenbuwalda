import { combineReducers } from 'redux'
import { colorReducer } from './color'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  router: routerReducer,
  color: colorReducer,
})

export { reducers }
