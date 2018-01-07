import * as types from './types'

export const doAuth = data => ({ type: types.AUTH, data })
export const doSignout = () => ({ type: types.SIGNOUT })
