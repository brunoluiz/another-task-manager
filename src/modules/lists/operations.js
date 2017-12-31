import lists from '../../repositories/lists-repository'
import users from '../../repositories/users-repository'
import * as types from './types'
import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'

export function* fetchByUser ({ data }) {
  try {
    const res = yield lists.findByUser(data.user)
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
  const { id } = yield lists.save(data)
  const user = yield users.find(data.user)

  user.lists = user.lists
    ? [ ...user.lists, id ]
    : [ id ]

  yield users.save(user)
}

export function* destroy ({ data }) {
  yield lists.destroy(data.id)
}

export const watchers = [
  takeEvery(types.CREATE, save),
  takeEvery(types.DELETE, destroy),
  takeEvery(types.FETCH, fetchByUser),
  takeEvery(types.UPDATE, save)
]
