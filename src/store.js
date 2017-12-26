import lists from './modules/lists'
import localStore from './utils/local-store'
import tasks from './modules/tasks'
import ui from './modules/ui'
import { fromJS } from 'immutable'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  lists,
  tasks,
  ui
})

const store = createStore(
  rootReducer,
  {
    lists: fromJS(localStore.get('lists')),
    tasks: fromJS(localStore.get('tasks')),
    ui: fromJS(localStore.get('ui'))
  }
)

store.subscribe(() => {
  localStore.save(store.getState())
})

export default store
