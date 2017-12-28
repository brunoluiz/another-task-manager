import * as types from './types'

export const doCreate = data => ({ type: types.TASK_CREATE, data })
export const doDelete = id => ({ type: types.TASK_DELETE, data: { id } })
export const doToogle = id => ({ type: types.TASK_TOOGLE, data: { id } })
export const doUpdate = data => ({ type: types.TASK_UPDATE, data })
