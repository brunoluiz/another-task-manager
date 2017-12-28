import { operations as tasks } from './modules/tasks'
import { operations as lists } from './modules/lists'
import { all } from 'redux-saga/effects'

export default function* rootSaga () {
  yield all([
    ...lists.watchers,
    ...tasks.watchers,
  ])
}
