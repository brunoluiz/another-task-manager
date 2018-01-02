import * as types from './types'
import { types as listsTypes } from '../lists'
import { Map, fromJS } from 'immutable'

const initial = fromJS({ isLoading: true, byId: {}, allIds: [] })

export default (state = initial, action) => {
  const { type, data } = action

  switch (type) {
    case types.FETCH:
      return state
        .set('isLoading', true)

    case types.FETCH_SUCCESS:
      return state
        .set('byId', fromJS(data.byId))
        .set('allIds', fromJS(data.allIds))
        .set('isLoading', false)

    case types.CREATE:
      return state
        .setIn(['byId', data.id], Map({
          done: false,
          id: data.id,
          listId: data.listId,
          value: data.value
        }))
        .updateIn(['allIds'], (arr) => arr.push(data.id))

    case types.DELETE:
      return state
        .deleteIn(['byId', data.id])
        .updateIn(['allIds'], (arr) => arr.delete(
          arr.findIndex((id) => id === data.id)
        ))

    case types.UPDATE:
      console.log(state.toJS().byId)
      console.log(data.id)
      return state
        .setIn(['byId', data.id, 'value'], data.value)

    case types.TOOGLE:
      return state.updateIn(['byId', data.id], (tasks) => {
        const done = tasks.get('done')

        return tasks.set('done', !done)
      })

    // TODO: For sure this should be refactored... it doesn't perform well
    case listsTypes.DELETE:
      return state
        .get('byId')
        .reduce((acc, item) => {
          const task = item.toJS()
          if (task.listId === data.id) return acc

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
