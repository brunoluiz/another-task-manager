import tasks from '../../repositories/tasks-repository'
import users from '../../repositories/users-repository'
import * as types from './types'
import {
  put,
  takeEvery
} from 'redux-saga/effects'

export function* fetchTasks () {
  const x = yield tasks.findByUser()
}

export function* saveTask ({ data }) {
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

export function* deleteTask ({ data }) {
  yield tasks.destroy(data.id)
}

export const watchers = [
  takeEvery(types.CREATE, saveTask),
  takeEvery(types.DELETE, deleteTask),
  // takeEvery(types.UPDATE, saveTask)
]
