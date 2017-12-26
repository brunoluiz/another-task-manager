import { Map, fromJS } from 'immutable'
import {
  CHECKLIST_DELETE
} from './lists'

export const TASK_TOOGLE = 'app/tasks/TASK_TOOGLE'
export const TASK_CREATE = 'app/tasks/TASK_CREATE'
export const TASK_DELETE = 'app/tasks/TASK_DELETE'
export const TASK_UPDATE = 'app/tasks/TASK_UPDATE'

export const doCreate = data => ({ type: TASK_CREATE, ...data })
export const doDelete = data => ({ type: TASK_DELETE, id: data })
export const doToogle = data => ({ type: TASK_TOOGLE, id: data })
export const doUpdate = data => ({ type: TASK_UPDATE, ...data })

let initial = fromJS({
  byId: {},
  allIds: []
})

export default (state = initial, action) => {
  switch(action.type) {
    case TASK_CREATE:
      const task = {
        done: false,
        id: action.id,
        listId: action.listId,
        value: action.value
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
        .setIn(['byId', action.id, 'value'], action.value)

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

