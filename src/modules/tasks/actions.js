// @flow

import * as types from './types'

export const doCreate = (data : Object) => ({ type: types.CREATE, data })
export const doDelete = (id : string) => ({ type: types.DELETE, data: { id } })
export const doFetch = (data : Object) => ({ type: types.FETCH, data })
export const doFetchSuccess = (data : Object) => ({ type: types.FETCH_SUCCESS, data })
export const doFetchFailure = (data : Object) => ({ type: types.FETCH_FAILURE, data })
export const doToogle = (id : string) => ({ type: types.TOOGLE, data: { id } })
export const doUpdate = (data : Object) => ({ type: types.UPDATE, data })
export const doUpdateAsync = (data : Object) => ({ type: types.UPDATE_ASYNC, data })
