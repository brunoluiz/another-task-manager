// @flow

import * as types from './types'

export const doAuth = (data : Object) : Object =>
  ({ type: types.AUTH, data })

export const doSignout = () : Object =>
  ({ type: types.SIGNOUT })
