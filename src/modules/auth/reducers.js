import * as types from './types'
import { Map, fromJS } from 'immutable'

const initial = fromJS({ user: {}, isLoggedIn: false })

export default (state = initial, action) => {
  const { type, data } = action

  switch (type) {
    case types.AUTH:
      return state
        .set('isLoggedIn', false)

    case types.AUTH_SUCCESS:
      return state
        .set('isLoggedIn', true)
        .set('user', fromJS(data))

    case types.AUTH_FAILURE:
      return state
        .set('isLoggedIn', false)
        .set('user', Map())

    default:
      return state
  }
}
