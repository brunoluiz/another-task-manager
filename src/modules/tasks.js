import { Map, fromJS } from 'immutable'
import uuid from 'uuid/v4'
import { CHECKLIST_CREATE, CHECKLIST_CHANGE } from './lists'

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
  id: data
})

export const doToogle = data => ({
  type: TASK_TOOGLE,
  id: data
})

export const doUpdate = data => ({
  type: TASK_UPDATE,
  data
})

const $id = uuid()

const initial = fromJS({
  active: 'x',
  tasks: {
    x: {
      byId: {
        [$id]: { id: $id, value: 'test', done: false, listId: 'x' }
      },
      allIds: [$id]
    }
  }
})

export default (state = initial, action) => {
  const active = state.get('active')

  switch(action.type) {
    case TASK_CREATE:
      return state.updateIn(['tasks', active], (tasks) => {
        const task = {
          id: uuid(),
          value: action.data,
          done: false
        }

        return tasks
          .setIn(['byId', task.id], Map(task))
      })

    case TASK_DELETE:
      return state.updateIn(['tasks', active], (tasks) => {
        return tasks.deleteIn(['byId', action.id])
      })

    case TASK_UPDATE:
      return state.updateIn(['tasks', active], (tasks) => {
        const { value, id } = action.data

        return tasks.updateIn(['byId', id], (task) =>
          task.set('value', value)
        )
      })

    case TASK_TOOGLE:
      return state.updateIn(['tasks', active], (tasks) => {
        const id = action.id

        return tasks.updateIn(['byId', id], (task) => {
          const done = task.get('done')
          return task.set('done', !done)
        })
      })

    case CHECKLIST_CHANGE:
      return state.set('active', action.data)

    case CHECKLIST_CREATE:
      return state.updateIn(['tasks'], (tasks) => {
        return tasks.set(action.id, {
          byId: {},
          allIds: []
        })
      })

    default:
      return state
  }
}

