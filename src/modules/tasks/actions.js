import * as types from './types'

export const doCreate = data => ({ type: types.TASK_CREATE, ...data })
export const doDelete = data => ({ type: types.TASK_DELETE, id: data })
export const doToogle = data => ({ type: types.TASK_TOOGLE, id: data })
export const doUpdate = data => ({ type: types.TASK_UPDATE, ...data })

