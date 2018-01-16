// @flow

import * as types from './types'

export const doAuth = (data : Object) => ({ type: types.AUTH, data })
export const doSignout = () => ({ type: types.SIGNOUT })
