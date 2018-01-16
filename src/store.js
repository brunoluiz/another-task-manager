// @flow

import createSagaMiddleware from 'redux-saga'
import auth from './modules/auth'
import lists from './modules/lists'
import tasks from './modules/tasks'
import ui from './modules/ui'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import sagas from './sagas'

const rootReducer = combineReducers({
  auth,
  lists,
  tasks,
  ui
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(sagas)

export default store
