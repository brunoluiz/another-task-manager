import createSagaMiddleware from 'redux-saga'
import lists from './modules/lists'
import localStore from './utils/local-store'
import tasks from './modules/tasks'
import ui from './modules/ui'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { fromJS } from 'immutable'
import sagas from './sagas'

const rootReducer = combineReducers({
  lists,
  tasks,
  ui
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  {
    lists: fromJS(localStore.get('lists')),
    tasks: fromJS(localStore.get('tasks')),
    ui: fromJS(localStore.get('ui'))
  },
  applyMiddleware(sagaMiddleware)
)

store.subscribe(() => {
  localStore.save(store.getState())
})

sagaMiddleware.run(sagas)

export default store
