import * as types from './types'
import { Map, fromJS } from 'immutable'

const initial = fromJS({ byId: {}, allIds: [] })

export default (state = initial, action) => {
  switch (action.type) {
    case types.CHECKLIST_CREATE:
      const list = { id: action.id, name: action.name }

      return state
        .setIn(['byId', list.id], Map(list))
        .updateIn(['allIds'], (arr) => arr.push(list.id))

    case types.CHECKLIST_DELETE:
      return state
        .deleteIn(['byId', action.id])
        .updateIn(['allIds'], (arr) => arr.delete(
          arr.findIndex((id) => id === action.id)
        ))

    case types.CHECKLIST_UPDATE:
      console.log(action)
      return state
        .setIn(['byId', action.id, 'name'], action.name)

    default:
      return state
  }
}

