import { combineReducers, createStore } from 'redux'
import tasks from '../containers/Tasks/reducer'

const rootReducer = combineReducers({
  tasks
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
