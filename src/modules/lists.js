import { Map, fromJS } from 'immutable'
import uuid from 'uuid/v4'

export const CHECKLIST_CREATE = 'app/lists/CREATE'
export const CHECKLIST_DELETE = 'app/lists/DELETE'
export const CHECKLIST_UPDATE = 'app/lists/UPDATE'
export const CHECKLIST_CHANGE = 'app/lists/CHANGE'
export const CHECKLIST_UPDATABLE = 'app/lists/UPDATABLE'

export const doCreate = data => ({
  type: CHECKLIST_CREATE,
  data
})

export const doDestroy = data => ({
  type: CHECKLIST_DELETE,
  id: data
})

export const doUpdate = data => ({
  type: CHECKLIST_UPDATE,
  data,
  id: data.id
})

export const doChangeActive = data => ({
  type: CHECKLIST_CHANGE,
  data
})

export const doSetUpdatable = id => ({
  type: CHECKLIST_UPDATABLE,
  id
})

const initial = fromJS({
  active: 'x',
  updatable: false,
  byId: {
    x: { id: 'x', name: 'Test list' },
  },
  allIds: ['x']
})

export default (state = initial, action) => {
  switch(action.type) {
    case CHECKLIST_CREATE:
      return state
        .updateIn(['byId'], (lists) => {
          const list = {
            id: uuid(),
            name: action.data
          }

          return lists.set(list.id, Map(list))
        })
        .set('updatable', null)

    case CHECKLIST_DELETE:
      return state
        .deleteIn(['byId', action.id])
        .set('updatable', null)

    case CHECKLIST_UPDATE:
      return state
        .updateIn(['byId'], (list) => {
          const { value, id } = action.data

          return list.setIn([id, 'name'], value)
        })

    case CHECKLIST_UPDATABLE:
      return state.set('updatable', action.id)

    default:
      return state
  }
}
