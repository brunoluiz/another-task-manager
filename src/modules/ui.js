import {
  fromJS
} from 'immutable'

export const UPDATE_ACTIVELIST = 'app/ui/UPDATE_ACTIVELIST'
export const SHOW_MODAL = 'app/ui/SHOW_MODAL'
export const HIDE_MODAL = 'app/ui/HIDE_MODAL'
export const TOGGLE_MENUBAR = 'app/ui/CHANGE_ACTIVELIST'

const initial = fromJS({
  activeList: 'x',
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
    default:
      return state
  }
}
