import * as types from './types'

export const doHideModal = (props) => ({ type: types.HIDE_MODAL })
export const doLoad = () => ({ type: types.LOAD })
export const doNotifyLoadFailure = () => ({ type: types.LOAD_SUCCESS })
export const doNotifyLoadSuccess = () => ({ type: types.LOAD_SUCCESS })
export const doSetUpdatableTask = (id) => ({ type: types.SET_UPDATABLE_TASK, data: { id } })
export const doShowCreateModal = data => ({ type: types.SHOW_CREATE_MODAL })
export const doShowUpdateModal = ({ id }) => ({ type: types.SHOW_UPDATE_MODAL, data: { id } })
export const doToggleMenubar = () => ({ type: types.TOGGLE_MENUBAR })
export const doUpdateActiveList = (id) => ({ type: types.UPDATE_ACTIVELIST, data: { id } })
