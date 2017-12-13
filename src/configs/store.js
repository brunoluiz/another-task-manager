import { combineReducers, createStore } from 'redux'
import { reducer as tasks } from '../containers/Tasks'

const rootReducer = combineReducers({
  tasks
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
