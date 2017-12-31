import { operations as auth } from './modules/auth'
import { operations as lists } from './modules/lists'
import { operations as tasks } from './modules/tasks'
import { operations as ui } from './modules/ui'
import { all, call } from 'redux-saga/effects'

export default function* rootSaga () {
  yield all([
    ...auth.watchers,
    ...lists.watchers,
    ...tasks.watchers,
  ])

  yield call(auth.isLoggedIn)

  yield call(ui.setLoaded)
}
