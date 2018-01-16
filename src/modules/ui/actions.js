// @flow

import * as types from './types'

export const doHideModal = () : Object =>
  ({ type: types.HIDE_MODAL })

export const doLoad = () : Object =>
  ({ type: types.LOAD })

export const doNotifyLoadFailure = () : Object =>
  ({ type: types.LOAD_SUCCESS })

export const doNotifyLoadSuccess = () : Object =>
  ({ type: types.LOAD_SUCCESS })

export const doSetUpdatableTask = (id : string) : Object =>
  ({ type: types.SET_UPDATABLE_TASK, data: { id } })

export const doShowCreateModal = (data : Object) : Object =>
  ({ type: types.SHOW_CREATE_MODAL })

export const doShowUpdateModal = ({ id } : { id: string }) : Object =>
  ({ type: types.SHOW_UPDATE_MODAL, data: { id } })

export const doToggleMenubar = () : Object =>
  ({ type: types.TOGGLE_MENUBAR })

export const doUpdateActiveList = (id : string) : Object =>
  ({ type: types.UPDATE_ACTIVELIST, data: { id } })
