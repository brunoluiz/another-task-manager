import * as types from './types'

export const doCreate = data => ({ type: types.CREATE, data })
export const doDelete = id => ({ type: types.DELETE, data: { id } })
export const doUpdate = data => ({ type: types.UPDATE, data })
export const doFetch = data => ({ type: types.FETCH, data })
export const doFetchSuccess = data => ({ type: types.FETCH_SUCCESS, data })
export const doFetchFailure = data => ({ type: types.FETCH_FAILURE, data })
