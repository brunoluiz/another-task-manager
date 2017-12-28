import {
  fromJS
} from 'immutable'
import * as lists from './lists.js'

export const UPDATE_ACTIVELIST = 'app/ui/UPDATE_ACTIVELIST'
export const SHOW_UPDATE_MODAL = 'app/ui/SHOW_UPDATE_MODAL'
export const SHOW_CREATE_MODAL = 'app/ui/SHOW_CREATE_MODAL'
export const HIDE_MODAL = 'app/ui/HIDE_MODAL'
export const TOGGLE_MENUBAR = 'app/ui/CHANGE_ACTIVELIST'
export const SET_UPDATABLE_TASK = 'app/ui/SET_UPDATABLE_TASK'

export const doHideModal = (props) => ({ type: HIDE_MODAL })
export const doSetUpdatableTask = (id) => ({ type: SET_UPDATABLE_TASK, id })
export const doShowCreateModal = data => ({ type: SHOW_CREATE_MODAL })
export const doShowUpdateModal = ({ id }) => ({ type: SHOW_UPDATE_MODAL, id })
export const doToggleMenubar = (props) => ({ type: TOGGLE_MENUBAR })
export const doUpdateActiveList = (id) => ({ type: UPDATE_ACTIVELIST, id })

const initial = fromJS({
  activeList: null,
  updatableTask: null,
  collapsedMenu: false,
  modal: {
    createList: { visible: false },
    updateList: { id: null, visible: false }
  }
})

export default (state = initial, action) => {
  switch (action.type) {
    case TOGGLE_MENUBAR:
      const collapsed = state.get('collapsedMenu')
      return state.set('collapsedMenu', !collapsed)
    case SHOW_CREATE_MODAL:
      return state
        .setIn(['modal', 'createList', 'visible'], true)
    case SHOW_UPDATE_MODAL:
      return state
        .setIn(['modal', 'updateList', 'visible'], true)
        .setIn(['modal', 'updateList', 'id'], action.id)
    case HIDE_MODAL:
      return state
        .setIn(['modal', 'createList', 'visible'], false)
        .setIn(['modal', 'updateList', 'visible'], false)
    case UPDATE_ACTIVELIST:
      return state
        .set('activeList', action.id)
    case SET_UPDATABLE_TASK:
      return state
        .set('updatableTask', action.id)
    case lists.CHECKLIST_CREATE:
      return state.set('activeList', action.id)
    case lists.CHECKLIST_DELETE:
      return (action.id === state.get('activeList'))
        ? state.set('activeList', null)
        : state
    default:
      return state
  }
}
