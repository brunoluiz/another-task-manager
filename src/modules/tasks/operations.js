import tasks from '../../repositories/tasks-repository'
import users from '../../repositories/users-repository'
import * as types from './types'
import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'

export function* fetchByUser ({ data }) {
  try {
    const res = yield tasks.findByUser(data.user)
    const normalized = res.reduce((acc, item) => {
      acc.byId[item.id] = item
      acc.allIds.push(item.id)
      return acc
    }, { byId: {}, allIds: [] })

    yield put({
      type: types.FETCH_SUCCESS,
      data: normalized
    })
  } catch (e) {
    yield put({ type: types.FETCH_FAILURE })
  }
}

export function* save ({ data }) {
  console.log(data)
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
  takeEvery(types.CREATE, save),
  takeEvery(types.DELETE, destroy),
  takeEvery(types.FETCH, fetchByUser),
  takeEvery(types.UPDATE_ASYNC, save)
]
