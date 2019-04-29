import { combineReducers } from 'redux'
import { colorReducer } from './color'

const reducers = combineReducers({
  color: colorReducer,
})

export { reducers }
