import tasks from '../../repositories/tasks-repository'
import * as types from './types'
import {
  put,
  takeEvery
} from 'redux-saga/effects'

export function* fetchTasks () {
  yield put({ type: types.FETCHING })
  const x = yield tasks.findByUser()
  console.log(x)
}

export function* createTask ({ data }) {
  yield tasks.save(data)
}

export function* deleteTask ({ data }) {
  yield tasks.destroy(data.id)
}

export function* updateTask ({ data }) {
  yield tasks.save(data)
}

export const watchers = [
  takeEvery(types.TASK_CREATE, createTask),
  takeEvery(types.TASK_DELETE, deleteTask),
  takeEvery(types.TASK_UPDATE, updateTask)
]
