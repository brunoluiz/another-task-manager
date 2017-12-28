import tasks from '../../repositories/tasks-repository'
import users from '../../repositories/users-repository'
import * as types from './types'
import {
  put,
  takeEvery
} from 'redux-saga/effects'

export function* fetch () {
  const x = yield tasks.findByUser()
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
  takeEvery(types.CREATE, save),
  takeEvery(types.DELETE, destroy),
  // takeEvery(types.UPDATE, saveTask)
]
