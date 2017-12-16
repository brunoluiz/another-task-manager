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
  byId: {
    [$id]: { id: $id, value: 'test', done: false, listId: 'x' }
  },
  allIds: [$id]
})

export default (state = initial, action) => {
  const active = state.get('active')

  switch(action.type) {
    case TASK_CREATE:
      return state.updateIn(['byId'], (tasks) => {
        const task = {
          id: uuid(),
          value: action.data,
          done: false,
          listId: active
        }

        return tasks
          .set(task.id, Map(task))
      })

    case TASK_DELETE:
      return state.updateIn(['byId'], (tasks) => {
        return tasks.delete(action.id)
      })

    case TASK_UPDATE:
      return state.updateIn(['byId'], (tasks) => {
        const { value, id } = action.data

        return tasks.setIn([id, 'value'], value);
      })

    case TASK_TOOGLE:
      return state.updateIn(['byId'], (tasks) => {
        const id = action.id
        const done = tasks.getIn([id, 'done'])

        return tasks.setIn([id, 'done'], !done);
      })

    case CHECKLIST_CHANGE:
      return state.set('active', action.data)

    case CHECKLIST_CREATE:
      return state.updateIn(['byId'], (tasks) => {
        return tasks.set(action.id, {
          byId: {},
          allIds: []
        })
      })

    default:
      return state
  }
}

