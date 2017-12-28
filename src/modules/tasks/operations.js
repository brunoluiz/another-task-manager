import tasks from '../../repositories/tasks-repository'
import * as types from './types'
import {
  put,
  takeEvery
} from 'redux-saga/effects'

export function* fetchTasks () {
  const x = yield tasks.findByUser()
}

export function* saveTask ({ data }) {
  yield tasks.save(data)
}

export function* deleteTask ({ data }) {
  yield tasks.destroy(data.id)
}

export const watchers = [
  takeEvery(types.TASK_CREATE, saveTask),
  takeEvery(types.TASK_DELETE, deleteTask),
  takeEvery(types.TASK_UPDATE, saveTask)
]
