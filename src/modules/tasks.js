import { fromJS } from 'immutable'
import uuid from 'uuid/v4'

import {
  CHECKLIST_CREATE,
  CHECKLIST_CHANGE
} from './lists'

export const TASK_TOOGLE = 'app/tasks/TASK_TOOGLE'
export const TASK_CREATE = 'app/tasks/TASK_CREATE'
export const TASK_DELETE = 'app/tasks/TASK_DELETE'
export const TASK_UPDATE = 'app/tasks/TASK_UPDATE'

export const doCreate = data => ({
  type: TASK_CREATE,
  data
})

export const doDestroy = data => ({
  type: TASK_DELETE,
  data
})

export const doToogle = data => ({
  type: TASK_TOOGLE,
  data
})

export const doUpdate = data => ({
  type: TASK_UPDATE,
  data
})

const initial = fromJS({
  active: 'x',
  tasks: {
    x: [
      { id: uuid(), value: 'test', done: false },
      { id: uuid(), value: 'hello world', done: true }
    ]
  }
})

const getIndex = (tasks, id) =>
  tasks.findIndex((task) => task.get('id') === id)

export default (state = initial, action) => {
  const active = state.get('active')

  switch(action.type) {
    case TASK_CREATE:
      return state.updateIn(['tasks', active], (tasks) => {
        const createdTask = fromJS({
          id: uuid(),
          value: action.data,
          done: false
        })

        return tasks.push(createdTask)
      })

    case TASK_DELETE:
      return state.updateIn(['tasks', active], (tasks) => {
        const index = getIndex(tasks, action.data)

        return tasks.delete(index)
      })

    case TASK_UPDATE:
      return state.updateIn(['tasks', active], (tasks) => {
        const { value, id } = action.data
        const index = getIndex(tasks, id)

        return tasks.update(index, (task) =>
          task.set('value', value)
        )
      })

    case TASK_TOOGLE:
      return state.updateIn(['tasks', active], (tasks) => {
        const id = action.data
        const index = getIndex(tasks, id)

        return tasks.update(index, (task) => {
          const done = task.get('done')
          return task.set('done', !done)
        })
      })

    case CHECKLIST_CHANGE:
      return state.set('active', action.data)

    case CHECKLIST_CREATE:
      return state.updateIn(['tasks'], (tasks) => {
        return tasks.set(action.id, [])
      })

    default:
      return state
  }
}

