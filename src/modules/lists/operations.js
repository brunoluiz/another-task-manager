import lists from '../../repositories/lists-repository'
import users from '../../repositories/users-repository'
import * as types from './types'
import {
  put,
  takeEvery
} from 'redux-saga/effects'

export function* fetch () {
  const x = yield lists.findByUser()
}

export function* save ({ data }) {
  console.log(data)
  const { id } = yield lists.save(data)
  const user = yield users.find(data.user)

  // If no user was found, create one using data.user id
  const userOut = user
    ? user
    : { id: data.user }

  userOut.lists = userOut.lists
    ? [ ...userOut.lists, id ]
    : [ id ]

  yield users.save(userOut)
}

export function* destroy ({ data }) {
  yield lists.destroy(data.id)
}

export const watchers = [
  takeEvery(types.CREATE, save),
  takeEvery(types.DELETE, destroy),
  // takeEvery(types.UPDATE, saveList)
]

