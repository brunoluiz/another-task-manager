import lists from './modules/lists'
import tasks from './modules/tasks'
import ui from './modules/ui'
import { fromJS } from 'immutable'
import { combineReducers, createStore } from 'redux'
import localStore from './utils/local-store'

const rootReducer = combineReducers({
  lists,
  tasks,
  ui
})

const preloadedState  = localStore.getState()
const store = createStore(
  rootReducer,
  {
    lists: fromJS(preloadedState.lists),
    tasks: fromJS(preloadedState.tasks),
    ui: fromJS(preloadedState.ui)
  }
)

store.subscribe(() => {
  const data = store.getState()
  localStore.saveState(data)
})

export default store
