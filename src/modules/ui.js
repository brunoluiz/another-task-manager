import {
  fromJS
} from 'immutable'
import * as lists from './lists.js'

export const UPDATE_ACTIVELIST = 'app/ui/UPDATE_ACTIVELIST'
export const SHOW_MODAL = 'app/ui/SHOW_MODAL'
export const HIDE_MODAL = 'app/ui/HIDE_MODAL'
export const TOGGLE_MENUBAR = 'app/ui/CHANGE_ACTIVELIST'
export const SET_UPDATABLE_TASK = 'app/ui/SET_UPDATABLE_TASK'

const initial = fromJS({
  activeList: 'x',
  updatableTask: null,
  collapsedMenu: false,
  showModal: false
})

export const doUpdateActiveList = (id) => ({
  id,
  type: UPDATE_ACTIVELIST
})

export const doHideModal = (props) => ({
  type: HIDE_MODAL
})

export const doShowModal = (props) => ({
  type: SHOW_MODAL
})

export const doToggleMenubar = (props) => ({
  type: TOGGLE_MENUBAR
})

export const doSetUpdatableTask = (id) => ({
  type: SET_UPDATABLE_TASK,
  id
})

export default (state = initial, action) => {
  switch(action.type) {
    case TOGGLE_MENUBAR:
      const collapsed = state.get('collapsedMenu')
      return state.set('collapsedMenu', !collapsed)
    case SHOW_MODAL:
      return state
        .set('showModal', true)
    case HIDE_MODAL:
      return state
        .set('showModal', false)
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
