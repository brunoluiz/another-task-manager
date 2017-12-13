import { combineReducers, createStore } from 'redux'
import { reducer as tasks } from '../containers/Tasks'
import { reducer as lists } from '../containers/Checklists'

const rootReducer = combineReducers({
  tasks,
  lists
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
