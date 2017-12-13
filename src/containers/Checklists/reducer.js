import * as type from './constants'
import {fromJS} from 'immutable';

const initial = fromJS({
  active: 'x',
  lists: {
    x: { id: 'x', name: 'Test list' },
  }
})

export default (state = initial, action) => {
  switch(action.type) {
    case type.CHECKLIST_CREATE:
      return state.updateIn(['lists'], (lists) => {
        const list = fromJS({
          id: action.id,
          name: action.data
        })

        return lists.set(action.id, list)
      })

    case type.CHECKLIST_DELETE:
      return state.deleteIn(['lists', action.data])

    case type.CHECKLIST_UPDATE:
      return state.updateIn(['lists', action.data.id], (list) => {
        return list.set('name', action.data.value)
      })

    default:
      return state
  }
}
