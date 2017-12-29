import tasks from '../../repositories/tasks-repository'
import users from '../../repositories/users-repository'
import * as types from './types'
import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'

export function* fetchByUser () {
  try {
    yield put({ type: types.FETCHING })

    const data = yield tasks.findByUser('99026eba-60cf-4f9e-8a12-4098c8a639e4')
    const normalized = data.reduce((acc, item) => {
      acc.byId[item.id] = item
      acc.allIds.push(item.id)
      return acc
    }, { byId: {}, allIds: [] })

    yield put({
      type: types.FETCHED,
      data: normalized
    })
  } catch (e) {
    yield put({ type: types.FETCH_FAILED })
  }
}

export function* save ({ data }) {
  const { id } = yield tasks.save(data)
  const user = yield users.find(data.user)

  // If no user was found, create one using data.user id
  const userOut = user
    ? user
    : { id: data.user }

  userOut.tasks = userOut.tasks
    ? [ ...userOut.tasks, id ]
    : [ id ]

  yield users.save(userOut)
}

export function* destroy ({ data }) {
  yield tasks.destroy(data.id)
}

export const watchers = [
  call(fetchByUser),
  takeEvery(types.CREATE, save),
  takeEvery(types.DELETE, destroy),
  // takeEvery(types.UPDATE, saveTask)
]
