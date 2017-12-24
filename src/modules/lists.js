import { Map, fromJS } from 'immutable'
import {
  UPDATE_ACTIVELIST
} from './ui.js'
import uuid from 'uuid/v4'

export const CHECKLIST_CREATE = 'app/lists/CREATE'
export const CHECKLIST_DELETE = 'app/lists/DELETE'
export const CHECKLIST_UPDATE = 'app/lists/UPDATE'

export const doCreate = data => ({
  type: CHECKLIST_CREATE,
  data
})

export const doDelete = data => ({
  type: CHECKLIST_DELETE,
  id: data
})

export const doUpdate = data => ({
  type: CHECKLIST_UPDATE,
  data,
  id: data.id
})

const initial = fromJS({
  updatable: false,
  byId: {
    x: { id: 'x', name: 'Test list' },
  },
  allIds: ['x']
})

export default (state = initial, action) => {
  switch(action.type) {
    case CHECKLIST_CREATE:
      const list = {
        id: uuid(),
        name: action.data
      }

      return state
        .setIn(['byId', list.id], Map(list))
        .updateIn(['allIds'], (arr) => arr.push(list.id))
        .set('updatable', null)

    case CHECKLIST_DELETE:
      return state
        .deleteIn(['byId', action.id])
        .updateIn(['allIds'], (arr) => arr.delete(
          arr.findIndex((id) => id === action.id)
        ))
        .set('updatable', null)

    case CHECKLIST_UPDATE:
      return state
        .setIn(['byId', action.id, 'name'], action.data.value)

    default:
      return state
  }
}
