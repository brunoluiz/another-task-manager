import { Map, fromJS } from 'immutable'
import {
  UPDATE_ACTIVELIST
} from './ui.js'

export const CHECKLIST_CREATE = 'app/lists/CREATE'
export const CHECKLIST_DELETE = 'app/lists/DELETE'
export const CHECKLIST_UPDATE = 'app/lists/UPDATE'

export const doCreate = data => ({ type: CHECKLIST_CREATE, ...data })
export const doDelete = id => ({ type: CHECKLIST_DELETE, id })
export const doUpdate = data => ({ type: CHECKLIST_UPDATE, ...data })

const initial = fromJS({
  byId: {
    x: { id: 'x', name: 'Test list' },
  },
  allIds: ['x']
})

export default (state = initial, action) => {
  switch(action.type) {
    case CHECKLIST_CREATE:
      const list = { id: action.id, name: action.name }

      return state
        .setIn(['byId', list.id], Map(list))
        .updateIn(['allIds'], (arr) => arr.push(list.id))

    case CHECKLIST_DELETE:
      return state
        .deleteIn(['byId', action.id])
        .updateIn(['allIds'], (arr) => arr.delete(
          arr.findIndex((id) => id === action.id)
        ))

    case CHECKLIST_UPDATE:
      console.log(action)
      return state
        .setIn(['byId', action.id, 'name'], action.name)

    default:
      return state
  }
}
