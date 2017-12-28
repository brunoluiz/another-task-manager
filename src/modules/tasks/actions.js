import * as types from './types'

export const doCreate = data => ({ type: types.CREATE, data })
export const doDelete = id => ({ type: types.DELETE, data: { id } })
export const doToogle = id => ({ type: types.TOOGLE, data: { id } })
export const doUpdate = data => ({ type: types.UPDATE, data })
