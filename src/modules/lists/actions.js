import * as types from './types'

export const doCreate = data => ({ type: types.CHECKLIST_CREATE, ...data })
export const doDelete = id => ({ type: types.CHECKLIST_DELETE, id })
export const doUpdate = data => ({ type: types.CHECKLIST_UPDATE, ...data })
