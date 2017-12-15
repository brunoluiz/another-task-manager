import { combineReducers, createStore } from 'redux'
import tasks from './modules/tasks'
import lists from './modules/lists'

const rootReducer = combineReducers({
  tasks,
  lists
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

