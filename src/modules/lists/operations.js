import * as actions from './actions'
import * as types from './types'
import lists from '../../repositories/lists-repository'
import users from '../../repositories/users-repository'
import { put, takeEvery } from 'redux-saga/effects'

export function * fetchByUser (user) {
  try {
    const res = yield lists.findByUser(user)
    const data = res.reduce((acc, item) => {
      acc.byId[item.id] = item
      acc.allIds.push(item.id)
      return acc
    }, { byId: {}, allIds: [] })

    yield put(actions.doFetchSuccess(data))
  } catch (e) {
    yield put(actions.doFetchFailure())
  }
}

export function * save ({ data }) {
  const { id } = yield lists.save(data)
  const user = yield users.find(data.user)

  user.lists = user.lists
    ? [ ...user.lists, id ]
    : [ id ]

  yield users.save(user)
}

export function * destroy ({ data }) {
  yield lists.destroy(data.id)
}

export const watchers = [
  takeEvery(types.CREATE, save),
  takeEvery(types.DELETE, destroy),
  takeEvery(types.UPDATE, save)
]
