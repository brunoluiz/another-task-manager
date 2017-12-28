import * as types from './types'
import { types as listsTypes } from '../lists'
import { Map, fromJS } from 'immutable'

const initial = fromJS({ byId: {}, allIds: [] })

export default (state = initial, action) => {
  switch (action.type) {
    case types.TASK_CREATE:
      return state
        .setIn(['byId', action.id], Map({
          done: false,
          id: action.id,
          listId: action.listId,
          value: action.value
        }))
        .updateIn(['allIds'], (arr) => arr.push(action.id))

    case types.TASK_DELETE:
      return state
        .deleteIn(['byId', action.id])
        .updateIn(['allIds'], (arr) => arr.delete(
          arr.findIndex((id) => id === action.id)
        ))

    case types.TASK_UPDATE:
      return state
        .setIn(['byId', action.id, 'value'], action.value)

    case types.TASK_TOOGLE:
      return state.updateIn(['byId', action.id], (tasks) => {
        const done = tasks.get('done')

        return tasks.set('done', !done)
      })

    // TODO: For sure this should be refactored... it doesn't perform well
    case listsTypes.CHECKLIST_DELETE:
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

