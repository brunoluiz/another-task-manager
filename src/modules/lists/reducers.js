import * as types from './types'
import { Map, fromJS } from 'immutable'

const initial = fromJS({ byId: {}, allIds: [] })

export default (state = initial, action) => {
  const { type, data } = action

  switch (type) {
    case types.CHECKLIST_CREATE:
      const list = { id: data.id, name: data.name }

      return state
        .setIn(['byId', list.id], Map(list))
        .updateIn(['allIds'], (arr) => arr.push(list.id))

    case types.CHECKLIST_DELETE:
      return state
        .deleteIn(['byId', data.id])
        .updateIn(['allIds'], (arr) => arr.delete(
          arr.findIndex((id) => id === data.id)
        ))

    case types.CHECKLIST_UPDATE:
      return state
        .setIn(['byId', data.id, 'name'], data.name)

    default:
      return state
  }
}
