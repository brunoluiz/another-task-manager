import { operations as lists } from './modules/lists'
import { operations as tasks } from './modules/tasks'
import { operations as ui } from './modules/ui'
import { all, call } from 'redux-saga/effects'

export default function* rootSaga () {
  yield all([
    ...lists.watchers,
    ...tasks.watchers,
  ])

  yield all([
    call(lists.fetchByUser),
    call(tasks.fetchByUser)
  ])

  yield call(ui.setLoaded)
}
