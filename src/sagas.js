import { operations as tasks } from './modules/tasks'
import { all } from 'redux-saga/effects'

export default function* rootSaga () {
  yield all([
    ...tasks.watchers
  ])
}
