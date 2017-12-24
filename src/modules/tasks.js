import { Map, fromJS } from 'immutable'
import uuid from 'uuid/v4'
import {
  CHECKLIST_CHANGE,
  CHECKLIST_CREATE,
  CHECKLIST_DELETE
} from './lists'

export const TASK_TOOGLE = 'app/tasks/TASK_TOOGLE'
export const TASK_CREATE = 'app/tasks/TASK_CREATE'
export const TASK_DELETE = 'app/tasks/TASK_DELETE'
export const TASK_UPDATE = 'app/tasks/TASK_UPDATE'

export const doCreate = data => ({
  type: TASK_CREATE,
  listId: data.listId,
  data: data.value
})

export const doDelete = data => ({
  type: TASK_DELETE,
  id: data
})

export const doToogle = data => ({
  type: TASK_TOOGLE,
  id: data
})

export const doUpdate = data => ({
  type: TASK_UPDATE,
  data: data.value,
  id: data.id
})

const $id = uuid()

const initial = fromJS({
  byId: {
    [$id]: { id: $id, value: 'test', done: false, listId: 'x' }
  },
  allIds: [$id]
})

export default (state = initial, action) => {
  switch(action.type) {
    case TASK_CREATE:
      const task = {
        done: false,
        id: uuid(),
        listId: action.listId,
        value: action.data
      }

      return state
        .setIn(['byId', task.id], Map(task))
        .updateIn(['allIds'], (arr) => arr.push(task.id))

    case TASK_DELETE:
      return state
        .deleteIn(['byId', action.id])
        .updateIn(['allIds'], (arr) => arr.delete(
          arr.findIndex((id) => id === action.id)
        ))

    case TASK_UPDATE:
      return state
        .setIn(['byId', action.id, 'value'], action.data)

    case TASK_TOOGLE:
      return state.updateIn(['byId', action.id], (tasks) => {
        const done = tasks.get('done')

        return tasks.set('done', !done);
      })

    case CHECKLIST_DELETE:
      return state
        .get('byId')
        .reduce((acc, item) => {
          const task = item.toJS()
          if (task.listId === action.id) return acc

          return state
            .setIn(['byId', task.id], Map(task))
            .updateIn(['allIds'], (arr) => arr.push(task.id))
        }, fromJS({
          byId: {},
          allIds: []
        }))

    default:
      return state
  }
}

