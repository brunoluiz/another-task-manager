import * as types from './types'
import { Map, fromJS } from 'immutable'

const initial = fromJS({ byId: {}, allIds: [] })

export default (state = initial, action) => {
  const { type, data } = action

  switch (type) {
    case types.FETCHING:
      return state
        .set('isLoading', true)

    case types.FETCHED:
      return state
        .set('byId', fromJS(data.byId))
        .set('allIds', fromJS(data.allIds))
        .set('isLoading', false)

    case types.CREATE:
      const list = { id: data.id, name: data.name }

      return state
        .setIn(['byId', list.id], Map(list))
        .updateIn(['allIds'], (arr) => arr.push(list.id))

    case types.DELETE:
      return state
        .deleteIn(['byId', data.id])
        .updateIn(['allIds'], (arr) => arr.delete(
          arr.findIndex((id) => id === data.id)
        ))

    case types.UPDATE:
      return state
        .setIn(['byId', data.id, 'name'], data.name)

    default:
      return state
  }
}
