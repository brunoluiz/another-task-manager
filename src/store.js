import lists from './modules/lists'
import tasks from './modules/tasks'
import ui from './modules/ui'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  tasks,
  lists,
  ui
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

