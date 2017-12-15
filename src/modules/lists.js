import { fromJS } from 'immutable'
import uuid from 'uuid/v4'

export const CHECKLIST_CREATE = 'app/lists/CREATE'
export const CHECKLIST_DELETE = 'app/lists/DELETE'
export const CHECKLIST_UPDATE = 'app/lists/UPDATE'
export const CHECKLIST_CHANGE = 'app/lists/CHANGE'
export const CHECKLIST_UPDATABLE = 'app/lists/UPDATABLE'

export const doCreate = data => ({
  type: CHECKLIST_CREATE,
  id: uuid(),
  data
})

export const doDestroy = data => ({
  type: CHECKLIST_DELETE,
  data
})

export const doUpdate = data => ({
  type: CHECKLIST_UPDATE,
  data
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
  lists: {
    x: { id: 'x', name: 'Test list' },
  }
})

export default (state = initial, action) => {
  switch(action.type) {
    case CHECKLIST_CREATE:
      return state
        .updateIn(['lists'], (lists) => {
          const list = fromJS({
            id: action.id,
            name: action.data
          })

          return lists.set(action.id, list)
        })
        .set('updatable', null)

    case CHECKLIST_DELETE:
      return state
        .deleteIn(['lists', action.data])
        .set('updatable', null)

    case CHECKLIST_UPDATE:
      return state
        .updateIn(['lists', action.data.id], (list) => {
          return list.set('name', action.data.value)
        })

    case CHECKLIST_UPDATABLE:
      return state.set('updatable', action.id)

    default:
      return state
  }
}
